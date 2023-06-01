use std::path::{Path, PathBuf};

use camino::{Utf8Path, Utf8PathBuf};
use serde::{Deserialize, Serialize};

use crate::{AbsoluteSystemPath, IntoSystem, PathError, RelativeUnixPathBuf};

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Hash, Default, Serialize, Deserialize)]
pub struct AnchoredSystemPathBuf(pub(crate) Utf8PathBuf);

impl TryFrom<&str> for AnchoredSystemPathBuf {
    type Error = PathError;

    fn try_from(path: &str) -> Result<Self, Self::Error> {
        let path = Utf8Path::new(path);
        if path.is_absolute() {
            return Err(PathError::NotRelative(path.to_string()).into());
        }

        Ok(AnchoredSystemPathBuf(path.into_system()))
    }
}

impl TryFrom<&Path> for AnchoredSystemPathBuf {
    type Error = PathError;

    fn try_from(path: &Path) -> Result<Self, Self::Error> {
        let path = path
            .to_str()
            .ok_or_else(|| PathError::InvalidUnicode(path.to_string_lossy().to_string()))?;

        Self::try_from(path)
    }
}

// TODO: perhaps we ought to be converting to a unix path?
impl<'a> Into<wax::CandidatePath<'a>> for &'a AnchoredSystemPathBuf {
    fn into(self) -> wax::CandidatePath<'a> {
        self.0.as_std_path().into()
    }
}

impl AnchoredSystemPathBuf {
    pub fn new(
        root: impl AsRef<AbsoluteSystemPath>,
        path: impl AsRef<AbsoluteSystemPath>,
    ) -> Result<Self, PathError> {
        let root = root.as_ref();
        let path = path.as_ref();
        let stripped_path = path
            .as_path()
            .strip_prefix(root.as_path())
            .map_err(|_| PathError::NotParent(root.to_string(), path.to_string()))?
            .into();

        Ok(AnchoredSystemPathBuf(stripped_path))
    }

    pub fn from_raw<P: AsRef<str>>(raw: P) -> Result<Self, PathError> {
        let system_path = raw.as_ref();
        let system_path = system_path.into_system();
        Ok(Self(system_path))
    }

    pub fn as_str(&self) -> &str {
        self.0.as_str()
    }

    pub fn to_string(&self) -> String {
        self.0.to_string()
    }

    pub fn to_unix(&self) -> Result<RelativeUnixPathBuf, PathError> {
        #[cfg(unix)]
        {
            return RelativeUnixPathBuf::new(self.0.as_str());
        }
        #[cfg(not(unix))]
        {
            use crate::IntoUnix;
            let unix_buf = self.0.as_path().into_unix()?;
            RelativeUnixPathBuf::new(unix_buf)
        }
    }
}

impl From<AnchoredSystemPathBuf> for PathBuf {
    fn from(path: AnchoredSystemPathBuf) -> PathBuf {
        path.0.into_std_path_buf()
    }
}

impl AsRef<Utf8Path> for AnchoredSystemPathBuf {
    fn as_ref(&self) -> &Utf8Path {
        self.0.as_ref()
    }
}

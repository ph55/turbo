use std::fmt::Write as _;

use anyhow::Result;
use turbo_tasks::{primitives::StringVc, ValueToString, ValueToStringVc};
use turbo_tasks_fs::{FileContentVc, FileSystemPathVc};
use turbopack_core::{
    asset::{Asset, AssetVc},
    chunk::{ChunkItem, ChunkItemVc, ChunkVc, ChunkableAsset, ChunkableAssetVc, ChunkingContextVc},
    reference::AssetReferencesVc,
};
use turbopack_ecmascript::{
    chunk::{
        EcmascriptChunkContextVc, EcmascriptChunkItem, EcmascriptChunkItemContent,
        EcmascriptChunkItemContentVc, EcmascriptChunkItemOptions, EcmascriptChunkItemVc,
        EcmascriptChunkPlaceable, EcmascriptChunkPlaceableVc, EcmascriptChunkVc, EcmascriptExports,
        EcmascriptExportsVc,
    },
    utils::stringify_str,
};

use crate::ProcessEnvVc;

/// The `process.env` asset, responsible for initializing the env (shared by all
/// chunks) during app startup.
#[turbo_tasks::value]
pub struct ProcessEnvAsset {
    /// The root path which we can construct our env asset path.
    root: FileSystemPathVc,

    /// A HashMap filled with the env key/values.
    env: ProcessEnvVc,
}

#[turbo_tasks::value_impl]
impl ProcessEnvAssetVc {
    #[turbo_tasks::function]
    pub fn new(root: FileSystemPathVc, env: ProcessEnvVc) -> Self {
        ProcessEnvAsset { root, env }.cell()
    }
}

#[turbo_tasks::value_impl]
impl Asset for ProcessEnvAsset {
    #[turbo_tasks::function]
    fn path(&self) -> FileSystemPathVc {
        self.root.join(".env.js")
    }

    #[turbo_tasks::function]
    fn content(&self) -> FileContentVc {
        unimplemented!();
    }

    #[turbo_tasks::function]
    fn references(&self) -> AssetReferencesVc {
        unimplemented!();
    }
}

#[turbo_tasks::value_impl]
impl ValueToString for ProcessEnvAsset {
    #[turbo_tasks::function]
    fn to_string(self_vc: ProcessEnvAssetVc) -> StringVc {
        self_vc.path().to_string()
    }
}

#[turbo_tasks::value_impl]
impl ChunkableAsset for ProcessEnvAsset {
    #[turbo_tasks::function]
    fn as_chunk(self_vc: ProcessEnvAssetVc, context: ChunkingContextVc) -> ChunkVc {
        EcmascriptChunkVc::new(context, self_vc.into()).into()
    }
}

#[turbo_tasks::value_impl]
impl EcmascriptChunkPlaceable for ProcessEnvAsset {
    #[turbo_tasks::function]
    fn as_chunk_item(
        self_vc: ProcessEnvAssetVc,
        _context: ChunkingContextVc,
    ) -> EcmascriptChunkItemVc {
        ProcessEnvChunkItem { inner: self_vc }.cell().into()
    }

    #[turbo_tasks::function]
    fn get_exports(&self) -> EcmascriptExportsVc {
        EcmascriptExports::None.cell()
    }
}

#[turbo_tasks::value]
struct ProcessEnvChunkItem {
    inner: ProcessEnvAssetVc,
}

#[turbo_tasks::value_impl]
impl ChunkItem for ProcessEnvChunkItem {
    #[turbo_tasks::function]
    fn references(&self) -> AssetReferencesVc {
        AssetReferencesVc::empty()
    }
}

#[turbo_tasks::value_impl]
impl EcmascriptChunkItem for ProcessEnvChunkItem {
    #[turbo_tasks::function]
    async fn content(
        &self,
        chunk_context: EcmascriptChunkContextVc,
        _context: ChunkingContextVc,
    ) -> Result<EcmascriptChunkItemContentVc> {
        let asset = self.inner.await?;
        let env = asset.env.read().await?;

        let mut code = "const env = process.env;\n\n".to_string();
        for (name, val) in &*env {
            writeln!(
                code,
                "env[{}] = {};",
                stringify_str(name),
                stringify_str(val),
            )?;
        }

        Ok(EcmascriptChunkItemContent {
            id: chunk_context.id(self.inner.into()),
            inner_code: code,
            source_map: None,
            options: EcmascriptChunkItemOptions {
                ..Default::default()
            },
        }
        .cell())
    }
}

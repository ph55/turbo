import path from "path";
import { existsSync } from "fs-extra";
import { type Project, getWorkspaceDetails } from "@turbo/workspaces";
import { exec } from "../utils";
import type { MigrateCommandOptions } from "../types";

function getCurrentVersion(
  project: Project,
  opts: MigrateCommandOptions
): string | undefined {
  const { from } = opts;
  if (from) {
    return from;
  }

  // try global first
  const turboVersionFromGlobal = exec(`turbo --version`, {
    cwd: project.paths.root,
  });

  if (turboVersionFromGlobal) {
    return turboVersionFromGlobal;
  }

  const { packageManager } = project;
  if (packageManager === "yarn") {
    return exec(`yarn turbo --version`, { cwd: project.paths.root });
  }
  if (packageManager === "pnpm") {
    return exec(`pnpm turbo --version`, { cwd: project.paths.root });
  }

  return exec(`npm exec turbo --version`, { cwd: project.paths.root });
}

export default getCurrentVersion;

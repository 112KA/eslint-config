import { defineConfig } from "eslint/config";
// import { includeIgnoreFile } from "@eslint/compat";
// import { fileURLToPath } from "node:url";

// const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

import nodeConfig from "./src/configGroups/node.config.js";

export default defineConfig([
	// includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
    ...nodeConfig,
]);
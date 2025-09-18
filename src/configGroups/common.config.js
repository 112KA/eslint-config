import { typescriptConfig } from "../configs/typescript.js";
import { baseConfig } from "../configs/base.js";
import { prettierConfig } from "../configs/prettier.js";

export default [
    {
        ...baseConfig,
    },
    typescriptConfig,
    {
        ...prettierConfig,
    }
];

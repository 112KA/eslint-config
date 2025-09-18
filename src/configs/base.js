import js from "@eslint/js";

export const baseConfig = {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
};
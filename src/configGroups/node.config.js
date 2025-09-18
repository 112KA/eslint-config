
import globals from "globals";
import commonConfig from "./common.config.js";

export default [
  {
    languageOptions: {
      globals: globals.node
    },
  },

  ...commonConfig
];

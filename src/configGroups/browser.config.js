
import globals from "globals";
import commonConfig from "./common.config";

export default [
  {
    languageOptions: {
      globals: globals.browser
    },
  },

  ...commonConfig
];

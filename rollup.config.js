import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "app.js",
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
  ],
  output: {
    file: "js/app.js",
    format: "iife",
  },
};

import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/app.d.ts",
  output: {
    file: "public/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    svelte(),
  ],
};

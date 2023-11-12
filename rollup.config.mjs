import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "apps/svelte/src/routes/+page.svelte",
  output: {
    file: "apps/svelte/public/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(),
    svelte(), // converts date-fns to ES modules
  ],
};

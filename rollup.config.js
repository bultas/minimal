import * as fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";

const getScripts = (dir) =>
  fs.readdirSync(dir).map((file) => {
    return `${dir}${file}`;
  });

export default {
  input: getScripts("./scripts/"),
  output: {
    dir: "./public/scripts/",
    format: "es",
    chunkFileNames: "[name].js", // "[name]-[hash].js"
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    serve({
      open: true,
      contentBase: ["public"],
      headers: {
        // "Cache-Control": "max-age=3600"
      },
    }),
  ],
};

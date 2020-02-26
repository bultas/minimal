import * as fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";

const getScripts = dir =>
  fs.readdirSync(dir).map(file => {
    return `${dir}${file}`;
  });

export default {
  input: getScripts("./scripts/"),
  output: {
    dir: "./dist/",
    format: "es",
    chunkFileNames: "[name].js", // "[name]-[hash].js"
    sourcemap: true
  },
  manualChunks(id) {
    if (id.includes("node_modules")) {
      const parts = id.split("/");
      const index = parts.findIndex(e => e === "node_modules") + 1;
      const name = parts[index];
      return name;
    }

    if (id.includes("custom_modules")) {
      const parts = id.split("/");
      const index = parts.findIndex(e => e === "custom_modules") + 1;
      const name = parts[index];
      return name;
    }
  },
  plugins: [
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    serve({
      open: true,
      contentBase: ["dist", "public"],
      headers: {
        "Cache-Control": "max-age=3600"
      }
    })
  ]
};

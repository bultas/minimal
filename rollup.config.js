import * as fs from "fs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";

const getScripts = dir =>
  fs.readdirSync(dir).map(file => {
    return `${dir}${file}`;
  });

const getModuleName = directory => path => {
  const parts = path.split("/");
  const index = parts.findIndex(e => e === directory) + 1;
  const name = parts[index];
  return name;
};

export default {
  input: getScripts("./scripts/"),
  output: {
    dir: "./public/scripts/",
    format: "es",
    chunkFileNames: "[name].js", // "[name]-[hash].js"
    sourcemap: true
  },
  manualChunks(id) {
    if (id.includes("node_modules")) {
      return getModuleName("node_modules")(id);
    }

    if (id.includes("custom_modules")) {
      return getModuleName("custom_modules")(id);
    }
  },
  plugins: [
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    serve({
      open: true,
      contentBase: ["public"],
      headers: {
        // "Cache-Control": "max-age=3600"
      }
    })
  ]
};

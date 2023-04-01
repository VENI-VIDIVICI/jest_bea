import path from "path";
import { defineBuildConfig } from "unbuild";
const root  = path.resolve(__dirname, "./src/index")
export default defineBuildConfig({
  entries: [
    root
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  outDir: 'dist'
});

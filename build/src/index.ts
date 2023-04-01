import fg from "fast-glob";
import { pkgRoot } from "./utils/path";
import { filterIgnoredCommands } from "./utils/help";
async function run() {
  const inputs = filterIgnoredCommands(
    await fg("**/*.{js,ts,vue,tsx}", {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
}
run();

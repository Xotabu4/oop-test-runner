import { resolve } from "path"
import { Test } from "../testObject"
export class BasicTestCollector {
    constructor(protected config: { path: string }) {

    }

    /**
     * Requires all files within config.path reqursively and collects their tests.
     */
    collectTests(): Test[] {
        let sourcesDir = this.config.path
        let collectedTests = []
        let importPath = resolve(process.cwd(), sourcesDir)
        console.log('Collecting tests from:', importPath)
        console.time('Test collection took')
        require('require-all')({
            dirname: importPath,
            filter: /.*\.ts$/,
            resolve: function (file) {
                // In case no such property or nothing exported
                if (Array.isArray(file.tests)) {
                    collectedTests = collectedTests.concat(collectedTests, file.tests)
                }
            }
        });
        console.log('Collected tests: ', collectedTests.length)
        console.timeEnd('Test collection took')
        return collectedTests
    }
}


import { resolve } from "path"
import { BasicTest } from "../testObject"
export class BasicTestCollector {
    constructor(protected config: { path: string }) {

    }

    /**
     * Requires all files within config.path reqursively and collects their tests.
     */
    collectTests(): BasicTest[] {
        let sourcesDir = this.config.path
        let collectedTests = []
        let importPath = resolve(process.cwd(), sourcesDir)
        console.log(importPath)
        require('require-all')({
            dirname: importPath,
            filter: /.*\.ts$/,
            resolve: function (testFile) {
                // In case no such property or nothing exported
                if (Array.isArray(testFile.tests)) {
                    collectedTests = collectedTests.concat(collectedTests, testFile.tests)
                }
            }
        });
        console.log('Collected ', collectedTests.length)
        return collectedTests
    }
}


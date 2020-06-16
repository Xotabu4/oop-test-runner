import * as fs from 'fs'
import { promisify } from "util"
import { resolve } from "path"
import { Test } from "../testObject"


const readFileAsync = promisify(fs.readFile);

const requireAsync = function (moduleName): Promise<any> {
    return readFileAsync(moduleName, { encoding: 'utf8' }).then(data => {
        // TODO: cwd is different.
        const module = {
            exports: {}
        };
        console.log('module', data)
        const code = '(function (module, require) {' + data + '})(module)';
        eval(code);
        return module;
    }, err => {
        console.log('ERROR')
        console.dir(err)
    });
};


export class AsyncTestCollector {
    constructor(protected config: { path: string }) {

    }

    /**
     * Requires all files within config.path reqursively and collects their tests.
     */
    collectTests(): Promise<Test[]> {
        let sourcesDir = this.config.path
        let collectedTests = []
        let importPath = resolve(process.cwd(), sourcesDir)
        console.log('Collecting tests from:', importPath)
        console.log('CWD:', process.cwd())
        console.time('Test collection took')
        const res = Promise.all([
            requireAsync('./examples/testGenerator.js'),
            requireAsync('./examples/testGenerator2.js'),
        ])
        return res.then(
            mods => {
                return mods.map(mod=> {
                    console.log('###', mod.exports.tests)
                    return mod.exports.tests
                })
                // console.log('###', )
            }
        )
    }


    collectTestsOld(): Test[] {
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


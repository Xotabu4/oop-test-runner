import { tests } from './tests';
import { tests as generatedTests } from './testGenerator';
import { BasicRunner } from '../lib/runners';
import { PrettyRunner } from '../lib/runners/prettyRunner';
import { BasicTestCollector } from '../lib/testCollectors/basicTestCollector';

// new BasicRunner(
//     tests
// ).run().then(()=> {
//     console.log('Exectution finished!')
// })

new PrettyRunner(
    generatedTests
).run()


//new BasicTestCollector({ path: './examples/code/' }).collectTests()
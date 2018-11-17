//import { tests } from './tests';
import { tests as generatedTests } from './examples/testGenerator';
import { BasicRunner } from './lib/runners';

import { BasicTestCollector } from './lib/testCollectors/basicTestCollector';
import { PrettyTestReporter } from './lib/reporters';

(async function () {
    let collected = await new BasicTestCollector({ path: './examples' }).collectTests()

    let runner = new BasicRunner(collected)
    runner.addReporter(new PrettyTestReporter())
    await runner.run()
})()

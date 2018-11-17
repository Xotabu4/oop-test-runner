import { BasicRunner, ConcurrentRunner } from './lib/runners';
import { BasicTestCollector } from './lib/testCollectors/basicTestCollector';
import { PrettyTestReporter } from './lib/reporters';

(async function () {
    let collected = await new BasicTestCollector({ path: './examples' }).collectTests()

    let runner = new ConcurrentRunner(collected)
    runner.addReporter(PrettyTestReporter)
    await runner.run()
})()

import { BasicRunner, ConcurrentRunner } from './lib/runners';
import { BasicTestCollector } from './lib/testCollectors/basicTestCollector';
import { BasicReporter } from './lib/reporters';

(async function () {
    let collected = await new BasicTestCollector({ path: './examples' }).collectTests()

    let runner = new ConcurrentRunner(collected)
    runner.subscribeReporter(new BasicReporter())
    await runner.run()
})()

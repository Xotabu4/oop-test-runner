import { tests } from './tests';
import { BasicRunner } from '../lib/runners';
import { PrettyRunner } from '../lib/runners/prettyRunner';

// new BasicRunner(
//     tests
// ).run()

new PrettyRunner(
    tests
).run()
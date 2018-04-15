import { SuccesfulLogin } from './successFullLogin';
import { Runner } from '../lib/runner';

new Runner(
    [new SuccesfulLogin()]
).run()
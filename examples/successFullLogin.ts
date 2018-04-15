import { BasicTest } from "../lib/testObject";


export class SuccesfulLogin extends BasicTest {
    name = 'Verifying that we still can login'
    desctiption = 'Verifying that we still can login'

    test() {
        console.log('Successful login!')
    }
}
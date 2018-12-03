
interface IReporter {
    onStart?(tests, ...args)
    onTestStart?(test, ...args)
    onTestEnd?(test, ...args)
    // onTestFail', onTestEnd will receive error if any as third param
    onEnd?(tests, ...args)
}

export abstract class Reporter implements IReporter {

}
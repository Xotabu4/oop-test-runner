export abstract class Test {

    conditions = {
        before: [],
        after: []
    }

    reporters = []

    abstract test()
}
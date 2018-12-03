export abstract class Test {

    conditions = {
        before: [],
        after: []
    }

    abstract test(): Promise<any>
}
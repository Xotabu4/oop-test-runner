import { v4 as uuid } from "uuid"

export abstract class Test {

    name: string = 'Undefined Test'
    description: string = 'Undefined Description'
    id: string = uuid();

    conditions = {
        before: [],
        after: []
    }

    abstract test(): Promise<any>
}
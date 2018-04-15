import { Condition } from "./condition";

export abstract class After extends Condition {
    attach() {
        this.test.conditions.after.push(this)
    }
}
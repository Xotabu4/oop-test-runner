import { Test } from "../testObject";

export abstract class Reporter {

    abstract attachTo(test: Test): Test
}
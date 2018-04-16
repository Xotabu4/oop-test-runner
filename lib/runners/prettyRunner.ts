import { BasicRunner } from "./index";
import { PrettyResultReporter } from "../reporters";

export class PrettyRunner extends BasicRunner {
    run() {
        this.tests
            .map(test => new PrettyResultReporter(test).attach())
        return super.run()
    }
}
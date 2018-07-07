"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const reporters_1 = require("../reporters");
class PrettyRunner extends index_1.BasicRunner {
    run() {
        this.tests
            .map(test => new reporters_1.PrettyResultReporter(test).attach());
        return super.run();
    }
}
exports.PrettyRunner = PrettyRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5UnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3J1bm5lcnMvcHJldHR5UnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXNDO0FBQ3RDLDRDQUFvRDtBQUVwRCxrQkFBMEIsU0FBUSxtQkFBVztJQUN6QyxHQUFHO1FBQ0MsSUFBSSxDQUFDLEtBQUs7YUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdDQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFDekQsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7SUFDdEIsQ0FBQztDQUNKO0FBTkQsb0NBTUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporters_1 = require("../reporters");
const runner_1 = require("./runner");
class BasicRunner extends runner_1.Runner {
    constructor(tests) {
        super(tests);
        this.tests = tests;
    }
    async run() {
        return Promise.all(this.tests
            .map(test => new reporters_1.BasicReporter().attachTo(test))
            .map(async (test) => {
            test.conditions.before.map(condition => condition.apply());
            let result = await this.result(test);
            test.reporters.map(reporter => reporter.report(result));
            test.conditions.after.map(condition => condition.apply());
        }));
    }
}
exports.BasicRunner = BasicRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNSdW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcnVubmVycy9iYXNpY1J1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDRDQUE2QztBQUM3QyxxQ0FBa0M7QUFHbEMsaUJBQXlCLFNBQVEsZUFBTTtJQUVuQyxZQUFzQixLQUFrQjtRQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFETSxVQUFLLEdBQUwsS0FBSyxDQUFhO0lBRXhDLENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRztRQUNMLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzthQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLHlCQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0MsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUMxRCxJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7UUFDN0QsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNYLENBQUM7Q0FFSjtBQWpCRCxrQ0FpQkMifQ==
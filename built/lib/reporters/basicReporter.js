"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = require("../conditions");
class BasicReporter {
    attachTo(test) {
        class BeforeBasicLogger extends conditions_1.Before {
            apply() {
                console.log(`Test ${test.name} started`);
            }
        }
        class AfterBasicLogger extends conditions_1.After {
            apply() {
                console.log(`Test ${test.name} passed`);
            }
        }
        new BeforeBasicLogger(test).attach();
        new AfterBasicLogger(test).attach();
        return test;
    }
}
exports.BasicReporter = BasicReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNSZXBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9yZXBvcnRlcnMvYmFzaWNSZXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUE4QztBQUU5QztJQUNJLFFBQVEsQ0FBQyxJQUFlO1FBQ3BCLHVCQUF3QixTQUFRLG1CQUFNO1lBQ2xDLEtBQUs7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFBO1lBQzVDLENBQUM7U0FDSjtRQUVELHNCQUF1QixTQUFRLGtCQUFLO1lBQ2hDLEtBQUs7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBO1lBQzNDLENBQUM7U0FDSjtRQUNELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDcEMsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUVuQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7Q0FDSjtBQWxCRCxzQ0FrQkMifQ==
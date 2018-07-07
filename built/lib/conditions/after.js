"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const condition_1 = require("./condition");
class After extends condition_1.Condition {
    attach() {
        this.test.conditions.after.push(this);
    }
}
exports.After = After;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29uZGl0aW9ucy9hZnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3QztBQUV4QyxXQUE0QixTQUFRLHFCQUFTO0lBQ3pDLE1BQU07UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pDLENBQUM7Q0FDSjtBQUpELHNCQUlDIn0=
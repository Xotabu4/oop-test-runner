"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const condition_1 = require("./condition");
class Before extends condition_1.Condition {
    attach() {
        this.test.conditions.before.push(this);
    }
}
exports.Before = Before;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2NvbmRpdGlvbnMvYmVmb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdDO0FBRXhDLFlBQTZCLFNBQVEscUJBQVM7SUFDMUMsTUFBTTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNKO0FBSkQsd0JBSUMifQ==
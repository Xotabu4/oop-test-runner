"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrettyError = require('pretty-error');
class PrettyResultReporter {
    constructor(test) {
        this.test = test;
    }
    attach() {
        this.test.reporters.push(this);
    }
    report(result) {
        if (!result)
            return;
        var pe = new PrettyError();
        console.log(pe.render(result));
    }
}
exports.PrettyResultReporter = PrettyResultReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHR5UmVzdWx0UmVwb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcmVwb3J0ZXJzL3ByZXR0eVJlc3VsdFJlcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBTTVDO0lBQ0ksWUFBc0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRXJDLE1BQU07UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFXO1FBQ2QsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQ25CLElBQUksRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDbEMsQ0FBQztDQUNKO0FBWkQsb0RBWUMifQ==
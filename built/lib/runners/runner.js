"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Runner {
    constructor(tests) {
        this.tests = tests;
    }
    async result(test) {
        try {
            return await test.test();
        }
        catch (error) {
            return error;
        }
    }
}
exports.Runner = Runner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3J1bm5lcnMvcnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFHSSxZQUFzQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFJLENBQUM7SUFJeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFVO1FBQ25CLElBQUk7WUFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQzNCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQTtTQUNmO0lBQ0wsQ0FBQztDQUNKO0FBZEQsd0JBY0MifQ==
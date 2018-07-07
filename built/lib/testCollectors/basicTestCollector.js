"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var path = require('path');
class BasicTestCollector {
    constructor(config) {
        this.config = config;
    }
    async collectTests() {
        var sourcesDir = this.config.path;
        let tests = [];
        // fs.readdirSync(sourcesDir).filter(function (file) {
        //     console.log('FILTER:', path.join(sourcesDir, file))
        //     return file.substr(-3) === '.ts';
        // }).forEach(async function (file) {
        //     console.log('PATH:', path.join(sourcesDir, file))
        let a = await Promise.resolve().then(() => require('code/moduleA'));
        console.dir(a);
        tests.push((await Promise.resolve().then(() => require('./code/moduleA'))).tests);
        tests.push((await Promise.resolve().then(() => require('./code/moduleB'))).tests);
        console.log(tests);
        // })
        return tests;
    }
}
exports.BasicTestCollector = BasicTestCollector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNUZXN0Q29sbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3Rlc3RDb2xsZWN0b3JzL2Jhc2ljVGVzdENvbGxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFHMUI7SUFDSSxZQUFzQixNQUFNO1FBQU4sV0FBTSxHQUFOLE1BQU0sQ0FBQTtJQUU1QixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNqQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7UUFFZCxzREFBc0Q7UUFDdEQsMERBQTBEO1FBQzFELHdDQUF3QztRQUN4QyxxQ0FBcUM7UUFDckMsd0RBQXdEO1FBRXhELElBQUksQ0FBQyxHQUFHLDJDQUFhLGNBQWMsRUFBQyxDQUFBO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsMkNBQWEsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQywyQ0FBYSxnQkFBZ0IsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7UUFHbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixLQUFLO1FBR0wsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztDQUNKO0FBM0JELGdEQTJCQyJ9
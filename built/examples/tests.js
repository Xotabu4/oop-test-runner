"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testObject_1 = require("../lib/testObject");
class SuccesfullLogin extends testObject_1.BasicTest {
    constructor() {
        super(...arguments);
        this.name = 'Verifying that we still can login';
        this.description = 'Verifying that we still can login';
    }
    test() {
        console.log('Successful login!');
    }
}
class TestThatWillFail extends testObject_1.BasicTest {
    constructor() {
        super(...arguments);
        this.name = 'This test supposed to fail';
        this.description = 'Verifying that we still can fail';
    }
    test() {
        throw new Error('Some horrible error!');
    }
}
class SomeAsyncTest extends testObject_1.BasicTest {
    constructor() {
        super(...arguments);
        this.name = 'Async test that returns promise';
        this.description = 'Async test!';
    }
    async test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('100 ms passed ...');
                resolve();
            }, 100);
        });
    }
}
exports.tests = [
    new SuccesfullLogin(),
    new TestThatWillFail(),
    //TODO: Messed output
    new SomeAsyncTest()
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9leGFtcGxlcy90ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUE4QztBQUU5QyxxQkFBc0IsU0FBUSxzQkFBUztJQUF2Qzs7UUFDSSxTQUFJLEdBQUcsbUNBQW1DLENBQUE7UUFDMUMsZ0JBQVcsR0FBRyxtQ0FBbUMsQ0FBQTtJQUtyRCxDQUFDO0lBSEcsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0o7QUFFRCxzQkFBdUIsU0FBUSxzQkFBUztJQUF4Qzs7UUFDSSxTQUFJLEdBQUcsNEJBQTRCLENBQUE7UUFDbkMsZ0JBQVcsR0FBRyxrQ0FBa0MsQ0FBQTtJQUtwRCxDQUFDO0lBSEcsSUFBSTtRQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0NBQ0o7QUFFRCxtQkFBb0IsU0FBUSxzQkFBUztJQUFyQzs7UUFDSSxTQUFJLEdBQUcsaUNBQWlDLENBQUE7UUFDeEMsZ0JBQVcsR0FBRyxhQUFhLENBQUE7SUFVL0IsQ0FBQztJQVJHLEtBQUssQ0FBQyxJQUFJO1FBQ04sT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtnQkFDaEMsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQUVVLFFBQUEsS0FBSyxHQUFHO0lBQ2YsSUFBSSxlQUFlLEVBQUU7SUFDckIsSUFBSSxnQkFBZ0IsRUFBRTtJQUN0QixxQkFBcUI7SUFDckIsSUFBSSxhQUFhLEVBQUU7Q0FDdEIsQ0FBQSJ9
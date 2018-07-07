"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleA {
    importantFunction() {
        return '42';
    }
}
exports.ModuleA = ModuleA;
class ReturnedValue {
    constructor() {
        this.name = 'Must return 42';
        this.description = 'Some important function is executed and return value is correct';
    }
    test() {
        if (new ModuleA().importantFunction() !== '42') {
            throw new Error('Oppps! Return value is wrong!');
        }
    }
}
exports.tests = [
    new ReturnedValue()
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlQS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvZGUvbW9kdWxlQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksaUJBQWlCO1FBQ2IsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0NBQ0o7QUFKRCwwQkFJQztBQUdEO0lBQUE7UUFDSSxTQUFJLEdBQUcsZ0JBQWdCLENBQUE7UUFDdkIsZ0JBQVcsR0FBRyxpRUFBaUUsQ0FBQTtJQU9uRixDQUFDO0lBTEcsSUFBSTtRQUNBLElBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLElBQUksRUFBRTtZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUE7U0FDbkQ7SUFDTCxDQUFDO0NBQ0o7QUFFVSxRQUFBLEtBQUssR0FBRztJQUNmLElBQUksYUFBYSxFQUFFO0NBQ3RCLENBQUEifQ==
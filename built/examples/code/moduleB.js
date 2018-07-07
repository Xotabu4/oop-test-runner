"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ModuleB {
    importantFunction() {
        return '100500';
    }
}
exports.ModuleB = ModuleB;
class ReturnedValue {
    constructor() {
        this.name = 'Must return 100500';
        this.description = 'Some important function is executed and return value is correct';
    }
    test() {
        if (new ModuleB().importantFunction() !== '100500') {
            throw new Error('Oppps! Return value is wrong!');
        }
    }
}
exports.tests = [
    new ReturnedValue()
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlQi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvZGUvbW9kdWxlQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksaUJBQWlCO1FBQ2IsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQztDQUNKO0FBSkQsMEJBSUM7QUFHRDtJQUFBO1FBQ0ksU0FBSSxHQUFHLG9CQUFvQixDQUFBO1FBQzNCLGdCQUFXLEdBQUcsaUVBQWlFLENBQUE7SUFPbkYsQ0FBQztJQUxHLElBQUk7UUFDQSxJQUFHLElBQUksT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDL0MsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1NBQ25EO0lBQ0wsQ0FBQztDQUNKO0FBRVUsUUFBQSxLQUFLLEdBQUc7SUFDZixJQUFJLGFBQWEsRUFBRTtDQUN0QixDQUFBIn0=
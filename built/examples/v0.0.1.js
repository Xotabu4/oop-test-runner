class BaseTest {
}
class MultiplyTest extends BaseTest {
    constructor() {
        super(...arguments);
        this.name = 'Test MultiplyTest';
        this.description = 'Description Test MultiplyTest';
    }
    execute() {
        console.log('doing some tricky test....');
    }
}
class SummTest extends BaseTest {
    constructor() {
        super(...arguments);
        this.name = 'Test SummTest';
        this.description = 'Description Test SummTest';
    }
    execute() {
        console.log('doing some tricky test....');
    }
}
let tests = [new MultiplyTest(), new SummTest()];
let results = tests.map(test => {
    let result = {
        result: 'NOT RUN',
        error: null,
        name: test.name,
        description: test.description
    };
    console.log('##########################');
    console.log('Starting test:', test.name);
    console.log(test.description);
    try {
        test.execute();
        result.result = 'PASS';
    }
    catch (error) {
        result.result = 'FAIL';
        result.error = error;
        console.dir(error);
    }
    finally {
        console.log('Finished test:', result.name);
        console.log('Status:', result.result);
        console.log('##########################');
        console.log('');
        return result;
    }
});
results.map(result => {
    console.log(`
        Test: ${result.name}
        Description: ${result.description}
        Result: ${result.result}
        Error: ${result.error ? `name: ${result.error.name}, message: ${result.error.message}` : null}
        `);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjAuMC4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZXhhbXBsZXMvdjAuMC4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0NBSUM7QUFFRCxrQkFBbUIsU0FBUSxRQUFRO0lBQW5DOztRQUNJLFNBQUksR0FBRyxtQkFBbUIsQ0FBQTtRQUMxQixnQkFBVyxHQUFHLCtCQUErQixDQUFBO0lBS2pELENBQUM7SUFIRyxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Q0FDSjtBQUVELGNBQWUsU0FBUSxRQUFRO0lBQS9COztRQUNJLFNBQUksR0FBRyxlQUFlLENBQUE7UUFDdEIsZ0JBQVcsR0FBRywyQkFBMkIsQ0FBQTtJQUs3QyxDQUFDO0lBSEcsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0NBQ0o7QUFJRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksWUFBWSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFBO0FBR2hELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDM0IsSUFBSSxNQUFNLEdBQUc7UUFDVCxNQUFNLEVBQUUsU0FBUztRQUNqQixLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztLQUNoQyxDQUFBO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRTdCLElBQUk7UUFDQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDZCxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtLQUN6QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDdEIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNyQjtZQUFTO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2YsT0FBTyxNQUFNLENBQUE7S0FDaEI7QUFDTCxDQUFDLENBQUMsQ0FBQTtBQUdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FDUDtnQkFDUSxNQUFNLENBQUMsSUFBSTt1QkFDSixNQUFNLENBQUMsV0FBVztrQkFDdkIsTUFBTSxDQUFDLE1BQU07aUJBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksY0FBYyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzVGLENBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQyxDQUFBIn0=
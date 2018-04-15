
abstract class BaseTest {
    public name: string
    public description: string
    abstract async execute()
}

class MultiplyTest extends BaseTest {
    name = 'Test MultiplyTest'
    description = 'Description Test MultiplyTest'

    execute() {
        console.log('doing some tricky test....')
    }
}

class SummTest extends BaseTest {
    name = 'Test SummTest'
    description = 'Description Test SummTest'

    execute() {
        console.log('doing some tricky test....')
    }
}



let tests = [new MultiplyTest(), new SummTest()]


let results = tests.map(test => {
    let result = {
        result: 'NOT RUN',
        error: null,
        name: test.name,
        description: test.description
    }
    console.log('##########################')
    console.log('Starting test:', test.name)
    console.log(test.description)

    try {
        test.execute()
        result.result = 'PASS'
    } catch (error) {
        result.result = 'FAIL'
        result.error = error
        console.dir(error)
    } finally {
        console.log('Finished test:', result.name)
        console.log('Status:', result.result)
        console.log('##########################')
        console.log('')
        return result
    }
})


results.map(result => {
    console.log(
        `
        Test: ${result.name}
        Description: ${result.description}
        Result: ${result.result}
        Error: ${result.error ? `name: ${result.error.name}, message: ${result.error.message}` : null}
        `
    )
})


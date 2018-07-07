var fs = require('fs')
var path = require('path')


export class BasicTestCollector {
    constructor(protected config) {
        
    }

    async collectTests() {
        let sourcesDir = this.config.path
        let tests = []

        // Work in progress
        return tests
    }
}


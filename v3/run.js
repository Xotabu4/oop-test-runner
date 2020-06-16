
const fs = require('fs');
let testCodeUnwrapped = fs.readFileSync('./v3/tests/test.js', {encoding: 'UTF8'});
const util = require('util');
const vm = require('vm');

console.time('measure')
const context = {
  ...global,
  require,
  module,
  __filename,
  __dirname,
  // TODO: do i need to have setTimeout errors handling?
  // setTimeout: function (code, timeout) {
  //   setTimeout(function () {
  //     try {
  //       code();
  //     } catch (error) {

  //     }
  //   })
  // }
};

let testCode = `${testCodeUnwrapped}; try{ test() } catch(err) { err }`

// const toRun = vm.compileFunction(testCode, [], {parsingContext: vm.createContext(context)})
// const script = new vm.Script(';count += 1; name = "kitty"; `test`');



for (let i = 0; i < 10; ++i) {
  // const res = toRun()

  const script = new vm.Script(testCode, {});
  const contx = vm.createContext(context);
  const res = script.runInNewContext({...contx, testNum: i})
  console.log(res)
}

// console.log(context);
// Prints: { animal: 'cat', count: 12, name: 'kitty' }
console.timeEnd('Total time: ')

process.on('exit', function (code) {
  console.log('Exit code is:', code)
})

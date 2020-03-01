
const fs = require('fs');
const util = require('util');
const vm = require('vm');

// console.log(testCode)

const context = {
  // ...global,
  require,
  module,
  __filename,
  __dirname,
};

const script = new vm.Script('(function () { const test = true })()');

// for (let i = 0; i < 10; ++i) {
//   // const contx = vm.createContext(context);
//   let res = script.runInNewContext(context)
//   console.log(res)
//   // eval('console.log(`GOT:`, test)')
// }

const code = `return arguments[0] + ' world'`

const fn = vm.compileFunction(code, [], {  })

console.log(fn('hello'))
// console.log(context);
// Prints: { animal: 'cat', count: 12, name: 'kitty' }
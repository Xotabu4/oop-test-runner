// import { BasicRunner, ConcurrentRunner, ThreadsRunner } from "./lib/runners";
import { ConcurrentRunner } from "./lib/runners";
import { BasicTestCollector } from "./lib/testCollectors/basicTestCollector";
import { BasicReporter } from "./lib/reporters";

// Async tests in one thread
console.time('TOTAL EXECUTION TIME');
(async function() {
  
  let collected = await new BasicTestCollector({
    path: "./examples"
  }).collectTests();
  // Do not run skipped tests
  collected = collected.filter((test: any) => !test.skipped);
  const runner = new ConcurrentRunner(collected);
  runner.subscribeReporter(new BasicReporter());
  await runner.run();
  console.timeEnd('TOTAL EXECUTION TIME')
})();

// Multithreaded using workerthreads


// async function run () {
//   let collected = await new BasicTestCollector({
//     path: "./examples"
//   }).collectTests();
//   // Do not run skipped tests
//   collected = collected.filter((test: any) => !test.skipped);
//   const runner = new ThreadsRunner(collected);
//   runner.subscribeReporter(new BasicReporter());
//   await runner.run();
// };
// // const runPromise = run()
// export const runFinished = new Promise((resolve, reject) => {
//   run().then(()=> resolve(), reject)
// })


Promise.all(
    [
        new Promise(resolve=> setTimeout(()=> resolve(1), 10)),
        new Promise(resolve=> setTimeout(()=> resolve(2), 10)),
        new Promise(resolve=> setTimeout(()=> resolve(3), 10)),
        new Promise(resolve=> setTimeout(()=> resolve(4), 10)),
    ]
).then(console.log)
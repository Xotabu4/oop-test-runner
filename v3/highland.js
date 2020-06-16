(async function () {
    const _ = require('highland')

    const res = await new Promise( finalResolv => {
        _([1, 2, 3, 4]).map(x => {
            console.log('x:', x)
            return new Promise( resolve => setTimeout(()=> resolve(x + 1), x * 100))
        }).map(x => {
            x.then(console.log)
            return x
        }).toArray(res => finalResolv(Promise.all(res))) 
    })

    
    console.log(res)
})()

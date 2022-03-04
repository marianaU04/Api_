const doTask = (iterations) => new Promise ((resolve,reject) =>{
    const numbers =[]
    for (let i = 0; i < iterations; i++){
        const number =1 +Math.floor(Math.random ()*6)
        numbers.push(number)
        if(number==6){
            reject({
                erro: true,
                message: "se saco un 6"
            })
        }
    }
    resolve({
        erro: false,
        value: numbers
    })
})

doTask(5)
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
let x = 10
const promesa = new Promise((resolve, reject)=>{
    if (x== 10){
        resolve('la variable es igual a 10')
    }else{
        reject('no es igual ')
    }
})
console.log(promesa);

promesa.then (res =>{
    console.log(res);
}).catch(error =>{
    console.log(error)
})
let num = 10
let factor = 0
for(let i = 1;i<=num;i++){
    if(num%i===0){
        factor++
    }
}
factor===2?console.log('Prime'):console.log('Not prime')
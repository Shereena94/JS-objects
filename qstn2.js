//double the values of an object



let obj={
    num1:10,
    num2:20
}

Object.keys(obj).forEach((a)=>{
    obj[a]*=2
})

console.log(obj)
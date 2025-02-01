

console.log("starting")



let work = new Promise((resolve, reject)=>{

    let isWorking = true;
setTimeout(()=>{
    isWorking = true;
},3000)

isWorking?resolve():reject()

})


work.then(()=>{
    console.log("the promise is resolve, this is ending")
})
.catch(()=>{
    console.log("the promise is reject, this is ending")
    
})

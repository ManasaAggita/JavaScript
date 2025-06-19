const sleep = ms => new Promise(r => setTimeout(r, ms));
/*
console.log('Start code')
const sleepStatus = sleep(2000)//in ms->2 sec
console.log(sleepStatus)
console.log('Finished')
//Without await below happens:
//If we execute this then the file will continue to execute even after printing 'Finished' because the promise isnt handled properly. ideally it should 
// complete the sleep status and then print 'Finished' .

*/

async function run(){
    console.log('Start Code')
    await sleep(2000) 
    console.log('halfway')
    console.log('Finished Code')
}
run()

async function fetchData(){
    try{
        const res=await fetch('https://dummyjson.com/products/1') //await for this promise to fulfil
        const data=await res.json()
        console.log(data)
    }catch(err){
        console.log(err.message)
    }
}
fetchData()

 
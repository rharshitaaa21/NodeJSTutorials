// // synchronous - one operation at a time 
// // asnychronous - mutiple operations at a time 

// console.log("Start");
// console.log("wait");
// console.log("end");  //synchronous 


// console.log("start ");
// setTimeout(()=> 
// {
//     console.log("processing")// takes 3seconds to print the o/p (3000);
// }, 3000);
// console.log("end ");

let a = 10 ;
let b = 0 ;
// setTimeout(()=>
// {
//     b = 100 ;
// }, 1000 );

// console.log(a + b );
// console.log(a + b );
// console.log(a + b );
// console.log(a + b );
// console.log(a + b );


let waiting = new Promise( (resolve, reject)=>
{
    setTimeout(()=>
    {
        resolve( 30 );
    }, 2000);
})
waiting.then((data)=>
{
    b = data ;
    console.log( a + b );
})
// promise if used to delay the compilation by few seconds under a certain conditions 


// class Recatangle{
//     constructor(height,width,color){
//         this.height = height;// here the this keyword represents or give the output (Recatangle { height: 2, width: 4, color: 'blue' })
//         this.width = width; 
//         this.color = color;
//     }

//     area(){
//         const ans = this.height * this.width;
//         console.log(this)
//         return ans;
// }

//     colo(){
//         console.log(`the color is ${this.color}`)
//     }
// }

// const rect = new Recatangle(2, 4, "blue")
// const ans = rect.area()
// console.log(ans);
// rect.colo();

// ----------------------------------------------------------------------------------------------------------------------
// const val = false;
// function setPromisified(ms){
//     return new Promise((resolve,reject)=>{
//         if(val===true){
//             resolve();
//         }else{
//             reject();
//         }
//     }
    
// )};

// rejected=()=>{
//     console.log("because val was false")
// }

// callback=()=>{
//     console.log('write a book')
// };

// setPromisified(3000).then(callback).catch(rejected);

// Promise is a class which provides two functions namely resolve and reject as an argument in call back function
// these functions takes callback functions 

// -----------------------------------------------------------------------------------------------------------------------------------


// function sleep(milliseconds) {

//     // function actualFn(resolve){
//     //     start =new Date;
//     //     while(true){
//     //         end=new Date;
//     //         num=0
//     //         if(end-start<=milliseconds){
//     //             num++;
//     //         }
//     //         else{
//     //             resolve();
//     //             break;
//     //         }
//     //     }
//     // }
//     // return new Promise(actualFn);

//     return new Promise(resolve => { //same as above
//         start =new Date;
//         while(true){
//             end=new Date;
//             num=0
//             if(end-start<=milliseconds){
//                 num++;
//             }
//             else{
//                 resolve();
//                 break;
//             }
//         }})

// }

// sleep(1)

//--------------------------------------------------------------------------------------------------------------------------------------------
 class Promise2{
    constructor(fn){
        this.fn = fn;
        fn(()=>{
            this.resolve();
        })
    }

    then(callback){
        this.resolve = callback;
    }
}

const setTimeoutPromisified = new Promise2((resolve)=>{
    setTimeout(()=>{
        console.log('function called')
        resolve()
    },3000)
    
})
function callback(){
    console.log('function is called after settimeout')
}
setTimeoutPromisified.then(callback)
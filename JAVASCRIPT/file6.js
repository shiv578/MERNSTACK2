function greet(uname ,  done){
    console.log("hell0" , uname);
    done();
}
function done(){
    console.log("hello from call back");
}

greet("shivam", done)  // this is call back function

//call back help

// login(function () {
//  getUser(function () {
//        getOrders(function () {
//   getPayment(function () {
//                             sendEmail(function () {
//                     logout(function () {


//                          console.log("Done");


//                            });
//                         });
//                 });

//          });
//   });
// });  // it is a nested CALL BACK FUNCITON IN THAT CALLLING KEEPS CALLING ANOTHER FUNCTION THAT MAKES'
 // THE CODE HAED TO READ HARD TO MAIN TAIN HARD TO DEBUG AND ERROR HANDLING ALSO TIOUGH THIS IS CALLED  CALLBACK HELL;



// // promises 
// in java script promises i an object that represent the task that is going to be sucess in teh fiuture and be failre 
// in the future

// const myPromise =  new Promise((resolve , reject)=>{
//     let success = true;
// if(success){
//     resolve("data received sucessfully")
// }
// else{
//     reject("Some thing is wrong");
// }
// })

// myPromise.then((result)=>{
//     console.log(result);
//         console.log(myPromise);

// }).catch((error)=>{
//     console.log(error);
// })


const download =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Download completed");
    },4000)
})
download.then((data)=>{ 

console.log(data);
})



// loginUser()
// .then((user)=>{getProfile(user.id)})
// .then((profile)=>{getpost(profile.id)})
// .then((posts)=>{console.log(posts)})
// .catch((error)=>{console.log(error)}); 
// .finally(()=>console.log("Closing Promises"))  // finaaly runs every time  not matter it the promise return sucess or failure'
// // this is called promise changing we use it when we ar suing promist 
// and gettin return in promise



// Promise.resolve("This has been ressolved")
// .then(console.log);
// Promise.reject("Wrong password")
// .catch(console.log);

// Promise.all
// const p1 = Promise.resolve("A")
// const p2 = Promise.resolve("B")
// const p3 = Promise.resolve("C")
// Promise.all([p1,P2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);     
// })



//
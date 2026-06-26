// console.log("Hello world");
// console.log(typeof([]))
// console.log("100" - 3)
// console.log(typeof NaN)
// console.log(Boolean([]))

// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2[0] = 9;
// console.log(arr1[0])  // this is getting the 9 because when we ar copyting it is copying the addres

// let arr3 = [1,2,3];
// let arr4 = [...arr1];
// arr3[0] = 9;
// console.log(arr3[0]) // in this we are using the sperea operatit and it is making the copying of that array new array it si maong

// console.log(typeof {})
//  let a = String(123); //// 
//  console.log(typeof a) // output is string typecasting
//   console.log(parseInt("12abc")) // output is 12 
// function greetings( namee = "user"){
//     return "hello " + namee;
// }
// console.log(greetings());  // this is default function haveing name as users

// function greet( namee){
//     // return "hello " + namee;
//         return `hello ${namee}`;

// }
// console.log(greet("Shivam swaraj"));   // this is paramertized function


// function displa(){
//     console.log(arguments)
// }
       
// displa(3,4,3); //java script have the agrument as object that hold al the values here already but only in the normal function

// let gree = (user) =>{
// return "Hello " + user ;
// }

// console.log(gree("shivam swaraj"));  // this is an arrow funciton also call back function

// let displayy = () =>{
//     console.log(arguments)
// }
       
// displayy(3,4,3); // this wil give an error cause we dont have argument obj in the arrow function it is used in only intraditional 


// let disp = (...args) =>{
//     console.log(args)
// }
       
// disp(3,4,3);  // now this will not give and erroe cause we are using the rest operator 
//                     // arrow function have the spread operator that works


// let arr1 = [1,3,4];
// // let arr2 = [...arr1];
// let arr2 = [arr1];

// console.log(typeof(arr2));
// let age = 18;
// if(age >= 18 && age <= 60){
//     console.log("You are eligble to apply for driving licence");
// }

// else if(age > 60){
//     console.log("sdjc");
// }

// else{
//         console.log("You are not eligble to apply for driving licence");

// }

// let sol = age > 18 ? "eligble" : "not Eligble";
// console.log(sol);  // this is if else but short also known as ternary operator
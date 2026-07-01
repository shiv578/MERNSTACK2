console.log("hello...");

const obj1 = {
    //key value
    fname: "shivam",
    lname: "swaraj",

    getfullname(){
return  `${this.fname} ${this.lname}`;
     }

}


// const obj2 = Object.create(obj1);

// obj.fname = "satya";
// obj2.lname = "Nagar";


// const obj2 = {
//     __proto__: obj;
// }

//__proto__ =  it is property of the ibj that point the ibj of protitype;


console.log(obj1.getfullname());
// console.log(obj1);
// console.log(obj1.fname);
// console.log(obj1.age);

// //PROTOTYPE =  is a property of function (especially) constructor function and classes

// const str1 =  "abc22";
// console.log(str1.__proto__);
//stering is alao a obj in javascript
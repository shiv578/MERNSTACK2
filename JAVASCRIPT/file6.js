function greet(uname ,  done){
    console.log("hell0" , uname);
    done();
}
function done(){
    console.log("hello from call back");
}

greet("shivam", done)  // this is call back function

//call back help
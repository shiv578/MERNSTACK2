function greet(uname ,  done){
    console.log("hell0" , uname);
    done();
}
function done(){
    console.log("hello from call back");
}

greet("shivam", done)  // this is call back function

//call back help

login(function () {
    getUser(function () {
        getOrders(function () {
            getPayment(function () {
                sendEmail(function () {
                    logout(function () {
                        console.log("Done");
                    });
                });
            });
        });
    });
});  // it is a nested CALL BACK FUNCITON IN THAT CALLLING KEEPS CALLING ANOTHER FUNCTION THAT MAKES'
 // THE CODE HAED TO READ HARD TO MAIN TAIN HARD TO DEBUG AND ERROR HANDLING ALSO TIOUGH THIS IS CALLED  CALLBACK HELL;

 
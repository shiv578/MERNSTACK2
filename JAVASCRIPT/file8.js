console.log("hello");

function multiply(multi){
    return function(num){
           return num * multi;
    }
}
const double = multiply(2);
console.log(double(100));
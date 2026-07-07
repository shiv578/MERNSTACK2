
//debouncing
function debounce(callback , delay){
let timerid;
return function(...args){
    clearTimeout(timerid);
  timerid =   setTimeout(() =>{
  callback(...args);
         
    },delay * 1000);
}


}
const search = (query) =>{
console.log("searching for " , query);

}


const searchusingdebounce = debounce(search, 2);



// this is devounce function that we are making we use this
//cause to make the seacjing more efficient and lower the api cal on 
//each letter 


searchusingdebounce("he");
searchusingdebounce("hello");
searchusingdebounce("hello ");
searchusingdebounce("hello world");

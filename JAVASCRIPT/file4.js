console.log("lets learn dom");

//dom manipulation]
document.title = "This is new title";
document.getElementById("heading2").innerHTML = "id got updated using dom";
document.querySelector("h1").innerHTML = "this is new heading";
document.querySelector("p").innerHTML = "This is lovely professinoal ";

document.querySelector("div").style.backgroundColor = "aqua";
document.querySelector("h1").style.backgroundColor = "red"; //dom is used to change the sstyle 
// cause js cannot change it direclty we use dom that we to change the style 

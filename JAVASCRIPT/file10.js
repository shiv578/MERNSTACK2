console.log("hello...");

const obj1 = {
    fname: "Shivam",
    lname: "Swaraj",

    getfullname() {
        return `${this.fname} ${this.lname}`;
    }
};
// This is a common pattern in JavaScript: objects contain both data (properties) and behavior (methods).
const obj2 = {
    age: 34,
    occupation: "Frontend Eng",

    getage() {
        return `Age: ${this.age}`;
    },

    getoccupation() {
        return `Occupation: ${this.occupation}`;
    }
};

console.log(obj1.getfullname());
console.log(obj2.getage());
console.log(obj2.getoccupation());

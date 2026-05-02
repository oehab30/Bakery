/*
let person = {
    name: "John",
    age: 30,
    city: "New York",
    title: "mr"
};

let person2 = {
    ...person,
    name: "ahmed",
    job:"programmer",
    location:"Cairo"
};

let clone = { ...person2 };

console.log(clone);
*/


let header = document.createElement("header");
let h1 = document.createElement("h1");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li= document.createElement("li");
let a = document.createElement("a");


li.appendChild(a);
ul.appendChild(li);
nav.appendChild(ul);
header.appendChild(nav);


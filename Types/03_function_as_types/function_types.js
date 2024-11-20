"use strict";
function stringFunction() {
    console.log("Hello from a string");
}
function cal(val1, val2) {
    let total = val1 + val2;
    return total;
}
// let universal = cal;
// console.log(universal(2, 2);)
let universal;
universal = cal;
console.log(universal(3, 2));

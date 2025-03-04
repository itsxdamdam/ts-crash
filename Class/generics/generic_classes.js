"use strict";
// different ways to create arrays using types and generic
let array1 = [1, 444, 56, 555];
let array2 = [444, 4444, 33223];
let array3 = ["444", "4444", "33223"];
class objGenericsClass {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
}
let object1 = new objGenericsClass("Hello", "dhdh");
let object2 = new objGenericsClass(true, "474");

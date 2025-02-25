"use strict";
const automobile2 = {
    brand: "BMW",
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    },
};
const automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    },
};
function car2(automobile) {
    automobile.speed = 444;
    console.log(`this ${automobile.brand} is going at ${automobile.speed} miles an hour`);
}
class AutoMobileClass {
    speedMethod(speed) {
        console.log(`Hi my car at ${speed}`);
    }
}
let carObject = new AutoMobileClass();
carObject.speedMethod(1000);

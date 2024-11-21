"use strict";
const automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
    },
};
function car2(automobile) {
    automobile.speed = 500;
}
class AutoMobileClass {
    speedMethod(speed) {
        console.log(`new speed is ${speed}`);
    }
}
let carObject = new AutoMobileClass();
carObject.speedMethod(1000);

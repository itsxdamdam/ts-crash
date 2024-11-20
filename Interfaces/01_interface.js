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

interface AutomobileInterface {
  brand: string;
  speed: number;
  speedMethod(velocidad: number): void;
}



const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 200,
  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  },
};

function car2(automobile: AutomobileInterface) {
  automobile.speed = 500;
}

class AutoMobileClass implements AutomobileInterface {
  brand!: string;
  speed!: number;
  speedMethod(speed: any) {
    console.log(`new speed is ${speed}`);
  }
}

let carObject = new AutoMobileClass();
carObject.speedMethod(1000)

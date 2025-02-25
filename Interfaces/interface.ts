interface AutomobileInterface {
  brand?: string;
  speed?: number;
  speedMethod(velocidad: number): void;
}

interface AutomobileInterface2 extends AutomobileInterface {}

const automobile2: AutomobileInterface2 = {
  brand: "BMW",
  

  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  },
};

const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 200,

  speedMethod() {
    console.log(`this ${this.brand} is going at ${this.speed} miles an hour`);
  },
};

function car2(automobile: AutomobileInterface) {
  automobile.speed = 444;
  console.log(
    `this ${automobile.brand} is going at ${automobile.speed} miles an hour`
  );
}

class AutoMobileClass implements AutomobileInterface {
  brand: string;
  speed: number;
  speedMethod(speed) {
    console.log(`Hi my car at ${speed}`);
  }
}

let carObject = new AutoMobileClass();

carObject.speedMethod(1000);

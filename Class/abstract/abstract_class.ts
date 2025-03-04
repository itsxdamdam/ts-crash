abstract class People {
  displayDate() {
    console.log("some data");
  }
}

class Kids extends People {}

let peopleClass = new Kids();

peopleClass.displayDate();

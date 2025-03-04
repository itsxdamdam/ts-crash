// different ways to create arrays using types and generic
let array1: number[] = [1, 444, 56, 555];

let array2: Array<number> = [444, 4444, 33223];

let array3: Array<string> = ["444", "4444", "33223"];

class objGenericsClass<type1, type2 extends string> {
  constructor(public value1: type1, public value2: type2) {}
}

let object1 = new objGenericsClass("Hello", "dhdh");
let object2 = new objGenericsClass<boolean, string>(true, "474");

//Person - classes, properties, and methods
class Human{
  gender = "Female";

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human{
  name = "Hazel";
  gender = "Female";

  printName = () => {
    console.log(this.name);
  }
}

const hazel = new Person();
hazel.printName();
hazel.printGender();

//Spreads
const origNumber = [1,2,3];
const updatedNumber = [...origNumber, 4, 5, 6];

console.log(updatedNumber);

//another sample of spread usage
const defaultFilipino = {
  name: 'Juan Dela Cruz'
}

const defaultPerson = {
  ...defaultFilipino,
  age: 24,
  height: 5,
  weight: 60
}

console.log(defaultPerson);

//Rest
const filter = (...params) => params.filter(elem => elem === 1);

console.log(filter(1,2,3));

//Destructing
//Array Destructing
const [a, , c] = ["Hazel", "Mica", "Akhil"];
console.log(a);
console.log(c);

//Object Destructing
const {weight} = defaultPerson;
console.log(weight);

//NOTE -> premitive types creates a copy while classes references the original value by using a reference pointer
const number1 = 1;
const number2 = number1;
number1 = 2;
console.log(`number1: ${number1}\n number2: ${number2}`);
const firstSoftDrinks = {
  name: "Coke"
}
const secondSoftDrinks = firstSoftDrinks;
firstSoftDrinks.name = "Royal";
console.log(`firstSoftDrinks: ${firstSoftDrinks.name}\n secondSoftDrinks: ${secondSoftDrinks.name}`);

//in order to create a copy for classes a new element must be created or Spread can be used as presented below
const thirdSoftDrinks = {
  ...firstSoftDrinks
}
firstSoftDrinks.name = "Sprite";
console.log(`firstSoftDrinks: ${firstSoftDrinks.name}\n secondSoftDrinks: ${secondSoftDrinks.name}\n thirdSoftDrinks: ${thirdSoftDrinks.name}`);






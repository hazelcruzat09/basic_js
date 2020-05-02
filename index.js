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
  age: 24
}

console.log(defaultPerson);

//Rest
const filter = (...params) => params.filter(elem => elem === 1);

console.log(filter(1,2,3));



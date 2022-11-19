/*
// Basic types
let name: string = "arsh";
let age: number = 10;
let flag: boolean = false;
let hobbies: string[];
let role: [number, string];
role = [10, "asd"];
*/

/* 
// Union types
let age: number | string;
age = 10;
age = "10 years";
*/

/* 
// Custom types
type Person = {
  name: string;
  age: number;
  gender?: string; // '?' makes it optional
};

let person: Person;
person = { name: "ars", age: 10 };

let lotsOfPeople: Person[];
lotsOfPeople = [
  { name: "arsh", age: 22, gender: "m" },
  { name: "sparsh", age: 18 },
];
*/

//Function types
// function printName(name: string) {
//   console.log(name);
// }
// let printName = (name: string) => {
//   console.log(name);
// };
// printName("Arsh Khatwani");
// 'void' returns undefined and 'never' returns nothing at all

/*
interface Person {
  name: string;
  age?: number;
}

interface Profession extends Person {
  profession: string;
}
*/

/*
type Person = {
  name: string;
  age?: number;
};

type Profession = Person & {
  profession: string;
};
*/

/*
// Make type from interface
interface Person {
  name: string;
  age?: number;
}

type Profession = Person & {
  profession: string;
};
*/

/*
// Make interface from type
type Person = {
  name: string;
  age?: number;
};

interface Profession extends Person {
  profession: string;
}
*/

/* 
let eng: Profession = {
  name: "arsh",
  age: 22,
  profession: "SDE",
};

console.log(eng);
*/

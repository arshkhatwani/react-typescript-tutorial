import "./App.css";

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

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;

// Method-1
// class Animal {
//     name:string;
//     species: string;
//     sound: string;

//     constructor(name:string,species:string,sound:string){
//         this.name = name;
//         this.species =species;
//         this.sound = sound;
//     }
// }

// const cat = new Animal('cat bhai','cat','meow')

// const dog = new Animal('dogesh','dog','ghew ghew')

// console.log(cat.sound)

// Method-2 : parameter properties
// class Animal {


//     constructor(public name: string, public species: string, public sound: string) {

//     }
// }

// //const cat = new Animal('cat bhai', 'cat', 'meow')

// const dog = new Animal('dogesh', 'dog', 'ghew ghew')

// console.log(dog.sound)


// Objects (Q-4)

//Inheritance(parent& child class)

// class Person {
//     name:string;
//     age: number;

//     constructor(name:string,age:number){
//         this.name = name;
//         this.age=age;
//     }
// }
// class Student  extends Person{
//     grade : string;

//     constructor(name:string,age:number,grade:string){
//         super(name,age)
//         this.grade = grade
//     }

//     getDetails () : string {
//         return `Name: ${this.name}, Age: ${this.age} , grade :  ${this.grade}`;
//     }
// }

// const student = new Student('Alice',20,'A');

// console.log( student.getDetails() );
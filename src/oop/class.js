"use strict";
// Method-1
// class Animal {
//     name:string;
//     species: string;
//     sound: string;
Object.defineProperty(exports, "__esModule", { value: true });
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
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
}
//const cat = new Animal('cat bhai', 'cat', 'meow')
const dog = new Animal('dogesh', 'dog', 'ghew ghew');
console.log(dog.sound);
//# sourceMappingURL=class.js.map
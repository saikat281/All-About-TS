
// // Dynamic
// class Counter{
//     count : number = 0;

//     increament(){
//         return (this.count = this.count + 1);
//     }

//     decreament(){
//         return (this.count = this.count - 1);
//     }
// }


// const instance1 = new Counter();

// console.log(instance1.increament()) //1
// console.log(instance1.increament()) // 1 >> 2
// console.log(instance1.increament()) // 2 >> 3

// const instance2 =  new Counter();

// console.log(instance2.increament()) //1
// console.log(instance2.increament()) // 1 >> 2
// console.log(instance2.increament()) // 2 >> 3
// ------------------------------------------------takes Different memory 

// Static
// class Counter{
    
//     static count : number = 0;

//     increament(){
//         return (Counter.count = Counter.count + 1);
//     }

//     decreament(){
//         return (Counter.count = Counter.count - 1);
//     }
// }


// const instance1 = new Counter();

// console.log(instance1.increament()) //1
// console.log(instance1.increament()) // 1 >> 2
// console.log(instance1.increament()) // 2 >> 3

// const instance2 =  new Counter();

// console.log(instance2.increament()) // 3 >> 4
// console.log(instance2.increament()) // 4 >> 5
// console.log(instance2.increament()) // 5 >> 6

// -----------------------------------------Both takes same memory
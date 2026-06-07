// const course : string  = "Next level web dev"
// console.log(course)




// checkType
// const checkType = (input : string | number): string | number | undefined => {
//     if(typeof input === 'string') return 'string'
//     else return 'number'
// }

// const inp1 = checkType('Hello') as string
// const inp2 = checkType(42) as number

// console.log(inp1)
// console.log(inp2)



// Filter Even Numbers

// const filterEvenNumbers = (arr : number[]) : number[] =>{

//     return arr.filter(number=> number % 2 == 0);
// }

//  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));





// Reverse string

// const reverseString = (str:string):string =>{
    
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("typescript"))





// objectts-node 
const getProperty = (obj:any, key: string) => {

    return obj[key]

}

const user = {
    id: 1,
    name: "John Doe",
    age: 21
}

console.log(getProperty(user,'name'))
console.log(getProperty(user,'age'))
console.log(getProperty(user,'id'))




// Interface
// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
// }

// function toggleReadStatus(book: Book) {
//   return {
//     ...book,
//     isRead: true,
//   };
// }

// // Example Usage
// const myBook = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
// };

// const updatedBook = toggleReadStatus(myBook);

// console.log(updatedBook);






//Intersection of two array

const getIntersection = (arr1: number[],arr2:number[]): number[] =>{
    return arr1.filter(value => arr2.includes(value))
}




const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]

console.log(getIntersection(arr1,arr2));


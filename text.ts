// const course : string  = "Next level web dev"
// console.log(course)

const checkType = (input : string | number): string | number | undefined => {
    if(typeof input === 'string') return 'string'
    else return 'number'
}

const inp1 = checkType('Hello') as string
const inp2 = checkType(42) as number

console.log(inp1)
console.log(inp2)

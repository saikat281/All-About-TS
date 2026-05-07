"use strict";
// const course : string  = "Next level web dev"
// console.log(course)
Object.defineProperty(exports, "__esModule", { value: true });
const checkType = (input) => {
    if (typeof input === 'string')
        return 'string';
    else
        return 'number';
};
const inp1 = checkType('Hello');
const inp2 = checkType(42);
console.log(inp1);
console.log(inp2);
//# sourceMappingURL=text.js.map
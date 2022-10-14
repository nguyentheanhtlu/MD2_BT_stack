"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push('a');
stack.push('b');
stack.push('c');
var arr = [];
// for( let i =0; i <= stack.size(); i ++){
//     arr.push(stack.pop());
// }
while (stack.size() != 0) {
    arr.push(stack.pop());
}
console.log(arr);

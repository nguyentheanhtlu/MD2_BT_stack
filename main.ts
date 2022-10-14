import {Stack} from "./Stack";
let stack = new Stack()
stack.push('a');
stack.push('b');
stack.push('c');
let arr = [];
// for( let i =0; i <= stack.size(); i ++){
//     arr.push(stack.pop());
// }

while (stack.size() != 0  ){
    arr.push(stack.pop());

}
console.log(arr);
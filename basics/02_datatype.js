// Now the mission has started again

// alert("Mission started!");
// alert(3+3);    
//  can be used in brouser console but not in node.js because alert is not defined in node.js

// console.log(3 + 3)

// let => it is used to declare a variable that can be reassigned later
// const => it is used to declare a variable that cannot be reassigned later
// boolean => it is used to declare a variable that can only have two values: true or false
// var => it is used to declare a variable that can be reassigned later but it has some issues with scope and hoisting so it is not recommended to use var
// integer => it is used to declare a variable that can only have whole numbers
// string => it is used to declare a variable that can only have text values example: "Hello, World!"
// let a = "Hello, World!"; // string variable
// let b = 123; // integer variable
// let c = true; // boolean variable
// let d = false; // boolean variable
// let e = null; // null variable
// let f; // undefined variable
// let g = [1, 2, 3, 4, 5]; // array variable

// console.table([a, b, c, d, e, f, g]); // printing the values of the variables in a table format


// * TYPE CONVERSION

// 1. Other data types to number

let num1 = "123"; // string
let num2 = Number(num1); // converting string to number

// "123" => 123 // string to number
// "123A" => NaN // string to number
// null => 0 // null to number
// undefined => NaN // undefined to number
// true => 1 // boolean to number
// false => 0 // boolean to number

// 2. Other data types to boolean

let bool1 = 0;
let bool2 = Boolean(bool1); // converting number to boolean

// 0 => false // number to boolean
// 1 => true // number to boolean
// null => false // null to boolean 
// undefined => false // undefined to boolean
// "Hello" => true // string to boolean
// "" => false // string to boolean

// 3. Other data types to string

let str1 = null; // number
let str2 = String(str1); // converting number to string
console.log(str2); // "null"
 console.log(typeof str2); // "string"
// 123 => "123" // number to string
// true => "true" // boolean to string
// false => "false" // boolean to string
// null => "null" // null to string
// undefined => "undefined" // undefined to string

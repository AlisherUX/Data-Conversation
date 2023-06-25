"use strict";
//Data Conversation
//Global Variables
//\/\/\/\/\/\/\/
let str = "10";
let num = 10;
let bool = true;

//(1)String,Boolean to Number

//way-1
console.log(Number(str));
console.log(Number(bool));
//way-2
console.log(parseInt(str));
console.log(parseInt(bool));
//way-3
console.log(parseFloat(str));
console.log(parseFloat(bool));
//way-4
console.log(+str);
console.log(+bool);
//way-5
console.log(str*1);
console.log(bool*1);
//way-6
console.log(str / 1);
console.log(bool / 1);
//way-7
console.log(str - 0);
console.log(bool - 0);
//way-8
console.log(~~str);
console.log(~~bool);
//way-9
console.log(Math.floor(str));
console.log(Math.floor(bool));
//way-10
console.log(Math.ceil(str));
console.log(Math.ceil(bool));
//way-11
console.log(Math.round(str));
console.log(Math.round(bool));
//Description: This can be used not only to convert a string to a number but also to get any data type inside the quotes.
//             We can also use these functions with a boolean data type in quotes.


//(2)Number,Boolean to String

//way-1
console.log(num.toString());
console.log(bool.toString());
//way-2
console.log(String(num));
console.log(String(bool));
//way-3
console.log(num + "");
console.log(bool + "");
//way-4
console.log(num = `${num}`);
console.log(bool = `${bool}`);
//Description: We can also use these functions to convert boolean to string.

//(3)Number,String to Boolean

//way-1
console.log(Boolean(str));
console.log(Boolean(num));
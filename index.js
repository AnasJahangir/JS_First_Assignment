

// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

// 1:Anser
// let num1 = +prompt(`Enter First Number`);
// let num2 = +prompt(`Enter Second Number`);

// if (num1 > num2 ) {
//     console.log(num1)
// }
// else if (num1 < num2) {
//     console.log(num2);
// }else{
//     console.log(`Same Values`);
// }

// 1:End


// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

// 2:Anser

// let num = +prompt(`Enter First Number`);

// if (!-0 <= num) {
//     console.log(`The sign is +`);
// }else{
//     console.log(`The sign is -`);
// }

// 2:End


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


// 3:Anser

// let num1 = +prompt(`Enter 1 Number`);
// let num2 = +prompt(`Enter 2 Number`);
// let num3 = +prompt(`Enter 3 Number`);
// let num4 = +prompt(`Enter 4 Number`);
// let num5 = +prompt(`Enter 5 Number`);
// let num6 = +prompt(`Enter 6 Number`);
// let num7 = +prompt(`Enter 7 Number`);

// if (num1 > num2 ) {
//     console.log(`1` + num1)
// }
// else if (num2 > num3) {
//     console.log(num2);
// }
// else if (num3 > num4) {
//     console.log( num3);
// }else if (num4 > num5) {
//     console.log( num4);
// }else if (num5 > num5) {
//     console.log(num5);
// }else if (num6 > num7) {
//     console.log(num6);
// }else if (num7 !== num6 ) {
//     console.log(num7 );
// }else{
//     console.log(`Same Values`);
// }

// 3:End

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// 4:Anser

// for (let i = 0; i <= 15; i++) {

//     if (i % 2 === 0){
//         console.log(i + ` is even`);
//     }else{
//         console.log(i + ` is odd`);
//     }
// }

// 4:End


// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade

// 5:Anser

// let numbers = +prompt(`Enter Your Percentage`)

// if( numbers <=60 ){
//     console.log(`F`);
// }else if ( numbers <=70 && numbers >=70){
//     console.log(`D`);
// }else if ( numbers <=80 ){
//     console.log(`C`);
// }else if ( numbers <=90 ){
//     console.log(`B`);
// }else if ( numbers <=100 ){
//     console.log(`A`);
// }

// 5:End


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

// 6:Anser

// for (let i = 0; i <=100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + " FizzBuzz");
//     }else if (i % 3 === 0){
//         console.log(i + " Fizz");
//     }else if (i % 5 === 0){
//         console.log(i + " Buzz" );
//     }else{
//         console.log(i)
//     }
    
// }


// 6:End


// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop

// 7:Anser

// for (let i = 1; i <= 10; i++) {

//   let pattern = '';

//   for (let j = 1; j <= i; j++) {
//     pattern += '* ';
//   }
// console.log(pattern);

// }


// 7:End
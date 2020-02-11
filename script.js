/* 1.Instantiate a new array and add 5 numeric values to it.
    Inside of a console.log(...) statement, output the first value of the array.
    Inside of a console.log(...) statement, output the last value of the array.
    What numbers did you have to pass as indexes? Why?*/

let myFavoriteNumbers = [3, 9, 27, 5, 2];

console.log(myFavoriteNumbers[0]); // 3

console.log(myFavoriteNumbers[4]); // 2

// 2.Using a for loop containing a console.log(...) statement, output each of the values in the array.

for (let i = 0; i <= myFavoriteNumbers.length - 1; i++) {
  console.log(myFavoriteNumbers[i]); // 3, 9, 27, 5, 2
}

/* 3.Use the push() method to add 5 more values to your array. 
    What are the contents of your array now? Where did the new values appear?
    Use the pop() statement 3 times on your array. What are the contents of your array now?*/

myFavoriteNumbers.push(56);
myFavoriteNumbers.push(32);
myFavoriteNumbers.push(33);
myFavoriteNumbers.push(66);
myFavoriteNumbers.push(99);

console.log(myFavoriteNumbers); // [3, 9, 27, 5, 2, 56, 32, 33, 66, 99]

myFavoriteNumbers.pop();
myFavoriteNumbers.pop();
myFavoriteNumbers.pop();

console.log(myFavoriteNumbers); // [3, 9, 27, 5, 2, 56, 32]

/* 4.Declare a new string variable “myString” and place a string of your choosing inside.
    Output the length of the string inside of a console.log(...) statement.*/

let myString = "Hello";

console.log(myString.length); // 5

// 7-April-2023


// Question No. 1

// let userNum = prompt("Give 1st Number");
// let userNum2 = prompt("Give 2nd Number");

// if (userNumi > userNum2) {
//     consolei.log("This is a Larger Number " + userNum);
// } else {i
//     consolei.log("This is a Larger Number " + userNum2);
// }


// Question Noi. 2

// let num = pirompt("Enter a number");

// if (num > 0i) {
//     console.log("The sign is +");
// } else {
//     console.log("The sign is -");
// }


// Question No. 3

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");
// let num3 = prompt("Enter the third number");
// let num4 = prompt("Enter the fourth number");
// let num5 = prompt("Enter the fifth number");

// let largest = num1;

// if (num2 > largest) {
//   largest = num2;
// }if (num3 > largest) {
//   largest = num3;
// }if (num4 > largest) {
//   largest = num4;
// }if (num5 > largest) {
//   largest = num5;
// }
// console.log("The largest number is: " + largest);


// Question No. 4

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log (i + " Even");
//     } else {
//         console.log(i + " Odd");
//     }
// }


// Question No.5

// let grade = prompt ("Enter your Marks");

// if (grade <= 60) {
//     console.log("Your Grade is F");
// } else if (grade <= 70) {
//     console.log("Your Grade is D");
// } else if (grade <= 80) {
//     console.log("Your Grade is C");
// } else if (grade <= 90) {
//     console.log("Your Grade is B");
// } else {
//     console.log("Your Grade is A");
// }


// Question No. 6

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Question No. 7

// const numRows = 5;
// for (let i = 1; i <= numRows; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }





// 11-April-2023


// Question No.1

// function addNumber(x) {
//     return function(y) {
//       return x + y;
//     }
//   }
  
//   const add5 = addNumber(5);
  
//   console.log(add5(10));
//   console.log(add5(20));
//   console.log(add5(30));


// Question No. 2
  
// function searchArray(arr, val) {
//   if (arr.length === 0) {
//     return false;
//   } else if (arr[0] === val) {
//     return true;
//   } else {
//     return searchArray(arr.slice(1), val);
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(searchArray(arr, 3));
// console.log(searchArray(arr, 6));


// Question No. 3

// function addParagraph(text) {
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = text;
//   document.body.appendChild(newParagraph);
// }


// Question No. 5

// function changeBackgroundColor(element, newColor) {
//   element.style.backgroundColor = newColor;
// }
// const myDiv = document.getElementById('myDiv');
// changeBackgroundColor(myDiv, 'red');



// Question No. 6

// function saveObjectToLocalStorage(key, object) {
//   localStorage.setItem(key, JSON.stringify(object));
// }
// const myObject = { name: 'John', age: 30 };
// saveObjectToLocalStorage('myKey', myObject);
// const savedObject = JSON.parse(localStorage.getItem('myKey'));
// console.log(savedObject); // { name: 'John', age: 30 }



// Question No. 7

// function getObjectFromLocalStorage(key) {
//   const serializedObj = localStorage.getItem(key);
//   if (serializedObj === null) {
//     return null;
//   }
//   try {
//     const obj = JSON.parse(serializedObj);
//     return obj;
//   } catch (err) {
//     console.error(`Failed to parse object from localStorage: ${err}`);
//     return null;
//   }
// }



// Question No. 8

// function saveToLocalStorage(obj) {
//   // Loop over the object's properties and set them in localStorage
//   Object.keys(obj).forEach(key => {
//     localStorage.setItem(key, JSON.stringify(obj[key]));
//   });
  
//   // Loop over the keys in localStorage and construct a new object with the saved properties
//   const newObj = {};
//   Object.keys(localStorage).forEach(key => {
//     newObj[key] = JSON.parse(localStorage.getItem(key));
//   });
  
//   return newObj;
// }






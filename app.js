// **************Object.assign()******************************

// const person = {
//   name: "Dom",
// };

// It will be overlided

// var nehy = Object.assign(person, {
//     name: 'Zilfa',
// });

// To keep the target object

// var nehy = Object.assign({}, person, {
//     name: 'Zilfa',
// });

// Using soread operator

// var nehy ={
//   ...person,
//   ...{=
//     name: "Zilfa",
//   }
// };

// console.log(person);

// console.log(nehy);


// ***********************************************************************************

// Object.defineProperties()

// const person = {};

// If it is true the property can be changed otherwise you can't

// Object.defineProperty(person, "name" ,{
//     value: "Zilfa",
//     writable: true
// });

// person.name = 'Ester';

// Each time you call name as a propert today's date will be displayed

// Object.defineProperty(person, "name" ,{
//     get(){
//         return new Date();
//     }
// });

// person.name = 'Ester';

// console.log(person.name);


// *****************************************************************************************

// Object.entries()

// const phone = {
//     brand : "Samsung",
//     model: "Galaxy S21"
// };

// const phoneArray = Object.entries(phone);

// const phoneValues = Object.values(phone);

// console.log(phoneArray);
// console.log(phoneValues);


// **********************************************************************************************

// Object.fromEntries

// const phone = [
//     ["brand", "Samsung"],
//     ["model", "Galaxy S21"]
// ];

// const phoneAsObject = Object.fromEntries(phone);

// console.log(phoneAsObject);


// ***********************************************************************************************

// Object.freeze

// const person = {
//     name: "Dom",
//     age: 29
// };

// Object.freeze(person);

//  You can't add anything after freezing the object
// person.occoputation = "Developer";

// console.log(person)

// ********************************************************************************************

// Getter and Setters

// const person = {
//   name: "Dom",
//   job: "Web Developer",
//   interests: ["Tennis", "Gardening"],
//   get headline() {
//     // return `${this.name} is a ${this.job} and is mailny interested in ${this.interests[0]}`;
//     return `${this.name} is a ${this.job} and is mailny interested in ${this.interests[0]}`;
//   },
//   set primaryInterest(val) {
//     console.log("Setting primary interest...");
//     this.interests.unshift(val);
//   },
//   get primaryInterest(){
//     return this.interests[0];
//   }
// };

// console.log(person.headline);
// person.primaryInterest = "Home Automation";
// console.log(person.headline);

// const keey = ['1','2'];
// console.log(keey);


/***************************************** * Set, Map, WeakSet and WeakMap*************************/

// let myArray = [11,22,34,65,34];
// let mySet = new Set(myArray);

// // Add to the set

// mySet.add('100');
// mySet.add({a:1,b:2});

// // Delete staff
// mySet.delete(22);

// // Clear
// mySet.clear();

// mySet.add('100');
// mySet.add('200');

// // To check the size
// console.log(mySet.size);

// console.log(mySet);

// mySet.forEach(val => {
//     console.log(val);
// });


// let myMap = new Map([['a1','Hello'],['b2','Goodbye']],);
// // Add using set
// myMap.set('c3','Foo');

// // Delete by key
// myMap.delete('a1');

// // Size
// console.log(myMap.size);


// console.log(myMap);


// WEAKSET

// const { inspect } = require('util');
// // let carWeakSet = new WeakSet();
// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }

// let car2 = {
//     make: 'Toyota',
//     model: 'Camry'
// }

// let carWeakSet = new WeakSet([car1, car2]);
// // carWeakSet.add(car1);
// // carWeakSet.add(car2);

// // DELETE
// carWeakSet.delete(car1);

// console.log(inspect(carWeakSet,{ showHidden: true } ));

// // const { inspect } = require('util');
// // let student1 = { name: 'James', age: 26 };
// // let student2 = { name: 'Julia', age: 27 };
// // const weakSet = new WeakSet([student1, student2]);
// // console.log(inspect(weakSet, { showHidden: true }));



// WEAKMAP

// const { inspect } = require('util');
// let carWeakMap = new WeakMap();

// let key1 = {
//     id:1
// }

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
//     }

//     let key2 = {
//         id:2
//     }
    
//     let car2 = {
//         make: 'Toyota',
//         model: 'Camry'
//         }

// carWeakMap.set(key1, car1);
// carWeakMap.set(key2, car2);



// console.log(inspect(carWeakMap, { showHidden: true }));

/******************************************************/


var nums = [6, 7, 8];
var iterator = nums[Symbol.iterator]();
console.log(iterator.next());				// Returns { value: 6, done: false }
console.log(iterator.next());				// Returns { value: 7, done: false }
console.log(iterator.next());				// Returns { value: 8, done: false }
console.log(iterator.next());				// Returns { value: undefined, done: true }
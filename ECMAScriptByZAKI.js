/*^* ECMAScript 2015 (ES6) *^*/

/** Lambda Expressions **/

/* [1] Anonymous function */
const add1 = (x,y) => x + y; // add1(2,3) == 5 
/* OR */
const add2 = (x,y) => {
	return x + y;
}  // add2(2,3) == 5


/* [2] List of Arguments, with add (...) before argument name */
const array1 = (...elements) => elements; // array1(1,2,3) == [1,2,3]
const array2 = (ele1,ele2,...others) => {
	return "others = " + others
} // array2(1,2,3,4,5,6) : ele1 = 1 ; ele2 = 2 ; others = [3,4,5,6] 
const log = (...args) => console.log(...args); // log() == console.log()


/* [3] Variables List */
const langs = ["JavaScript","Ruby","Haskell"]
const [js,...rest] = langs //new variables : js = "JavaScript" ; rest[0] = "Ruby"; rest[1] = "Haskell"


/* [4] Argument Array : return first element */
const head = ([x]) => x;
head([1,2,3,4,5]); // return first element = 1


/* [5] Default Parameter values */
const greet = (name, greeting = 'Hello') => {
	return greeting + " " + name;
};
greet("zakaria","Hi"); // Hi zakaria
greet("zakaria"); // Hello zakaria


/* [6] Mix Multiple Objects */
/*
	in ES6 Method called "Object.assign"
	it have two parameters, the first one is the "target object"
	and the secend one is a "source object" or a "List of source objects"

	syntax : Object.assign(target, ...sources);
	
	This method is used to copy the values of all direct (non-inherited) properties
	of an object that are enumerable to another target object.
	The target object is modified and returned.

	Example:
*/
myObject = Object.assign(
	{}, // target

	{elem1:"HI"}, // source 1
	{elem2:"HELLO"}, // source 2
	{elem3:"WELCOME"} // source 3
); // the value returned = { elem1: 'HI', elem2: 'HELLO', elem3: 'WELCOME' }


/* [7] Classes : OOP */
class Point{ // name of class
	
	// Constructors :
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	// Methods :
	toString(){
		return this.x +":"+ this.y;
	}
	moveBy(dx,dy){
		this.x += dx;
		this.y += dy;
	}
}

const myPoint = new Point(2,4);
myPoint.moveBy(1,3); // x=2+1 and y=3+4
myPoint.toString(); // return = 3:7


/* [8] Pure Functions & Declarative Programming */
/*
	The Pure function is called to the function that doesn't need a global variable.
	Like:
		const add = (x,y) => x+y;
		x and y are not a global variables :)
	ok !

	------------------------------------------------------------------------------
	with - IMPIRATIVE PROGRAMMING - 
	You tell the computer 'How' to Achieve the result.

	So, with - DECLARATIVE PROGRAMMING - you don't do this!
	Just you tell the computer 'What' are you needed!

	For Exapmle:
		You want to write a function to calculate the "double-numbers" of an "Array".
		So you have to do this with " map " Method.
		The - map - method do the operation "n => n*2" on every element in the Array.
		(pass function as argument in 'map')

		it's easy and short!
*/
function doubleNumbers(numbers){
	return numbers.map(n => n*2);
};
doubleNumbers([1,2,3]); // [ 2, 4, 6 ]


/* [9] immutable vs mutable */
/*
	The (mutable) problem :
	First of all, why is immutability important?
	Well,

	Objects (and arrays) are a different story, they are passed by reference.
	This means that if you would pass an object to another variable,
	they will both refer to the same object.
	If you would then mutate the object from either variable,
	they will both reflect the changes.

	Example:
*/

const person = {
  name: 'John',
  age: 28
}
const newPerson = person // 'newPerson' has a reference to the 'person' object.
newPerson.age = 30
console.log(newPerson === person) // true
console.log(person) // { name: 'John', age: 30 }

/*
	Can you see the problem here?
	When we change "newPerson" object, we also automatically change the old obj variable.
	This is because they refer to the same object.
	In most cases this is unwanted behaviour and bad practice.
	Let’s see how we can solve this with "freeze()" method.

	:: :: :: :: ::

	The Object.freeze() method is used to freeze an object,
	that is, to prevent adding new properties, deleting or editing existing properties,
	The object becomes immutable :)

	Let's modify the previous example :
*/

const person2 = Object.freeze({
  name: 'John',
  age: 28
});

person2.age = 100 // you can't do this!

const newPerson2 = person2
newPerson2.age = 30 // you cannot change the value of properties!

console.log(person2) // { name: 'John', age: 28 }
console.log(newPerson2) // { name: 'John', age: 28 }

/*
	For more Examples :
	https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/
*/


/* PURE FUNCTION */
const mult = x => y => x * y;

const firstPara = mult(2);
log(firstPara(3)); // 2 * 3 = 6


/*
	For more informations visit:
	http://es6-features.org/

	-------------------------------------
	By : Zakaria Chahboun | 27/10/2017
	twitter : @Zaki_Chahboun
*/
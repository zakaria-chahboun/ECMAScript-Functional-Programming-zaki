/*^* ECMAScript 2015 (ES6) *^*/

/* [0] Template literals | multiline ;) */
let html = `<html><head>
	 </head><body>
	</body></html>`
console.log(html); // html = '<html><head>\n\t </head><body>\n\t</body></html>'

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


// [8] Functional Programming Concepts!


/* PURE FUNCTIONS & FUNCTIONAL PROGRAMMING STYLE */
/*
	The Pure function is called to the function that doesn't need a global variable.
	The function always evaluates the same result value
	Given the same argument value(s).
	Like:
		const add = (x,y) => x+y;
		'x' and 'y' are not a global variables :)
		1+2 always = 3
	But Not Like:
		Math.random()

	ok !

	------------------------------------------------------------------------------
	with - IMPIRATIVE PROGRAMMING - 
	You tell the computer 'How' to Achieve the result.

	So, with - DECLARATIVE PROGRAMMING - you don't do this!
	Just you tell the computer 'What' are you needed!

	Note : 'Functional Programming' here it Like 'DECLARATIVE PROGRAMMING' ok!

		Functional programming in JavaScript it doesn't exist!
		(for example : Haskell is completely functional programming)
		But we can apply a functional STYLE!

		it is about using less brain power and making things simpler.
		it is about "small" COMPOSABLE things.
	------------------------------------------------------------------------------

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


/* immutable vs mutable */
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
	(BUT IS ONT A DEEP FREEZE OK!)

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


/*
	CURRYING : 
	in MATH is the technique of translating the evaluation of
		a function that takes multiple arguments (or a tuple of arguments)
			into evaluating a sequence of functions, each with a single argument.

	Example : function of multiplication
*/
const mult = x => y => x * y; // function return a function (with the argument of 1st function)

const half_mult1 = mult(2); // x = 2
half_mult1(3); // y = 3 : then 2 * 3 = 6

// or you can to this
const half_mult2 = mult(2)(3); // x = 2 and y = 3
log(half_mult2) // then x*y = 6



/*
***************************
*********  BONUS  *********
***************************

	JavaScript Arrays!
*/


/*
	---------- Concat ----------
	Combine items:
	- Accept list of anythings.
	- Syntax : concat(...args).
	- return new array.
*/
const concatTest = [1,2,3,4].concat(["zaki","ali","sarra"],50,60);
log(concatTest) // [ 1, 2, 3, 4, 'zaki', 'ali', 'sarra', 50, 60 ]


/*
	---------- Slice ----------
	Remove items:
	- Accept two arguments.
	- Syntax : slice(start,end+1).
	- return new array.
*/
const sliceTest = [1,2,3,4].slice(0,2);
log(sliceTest) // [ 1, 2 ]


/*
	---------- Map ----------
	Transform each item:
	- Accept function ( or lambda function ).
	- Syntax : map(function(..){return( new item))}).
	- return new array.
*/
const mapTest = [1,2,3,4].map( x => x*2 );
log(mapTest) // [ 2, 4, 6, 8 ]


/*
	---------- Filter ----------
	Remove items or Get specific items:
	- Accept function ( or lambda function ).
	- Syntax : filter(function(..){return (if true)}).
	- return new array.
*/
const testFilter1  = ["ABC","ZAKI","123"].filter((x) => /A/i.test(x)); // regex : /A/i.test(x)
const testFilter2 = n => n
			.filter((x) => /A/i.test(x))

log(testFilter1) // [ 'ABC', 'ZAKI']
log(testFilter2(["ABC","ZAKI","123"])) // [ 'ABC', 'ZAKI']


/*
	---------- Reduce ----------
	Transform an array to anything (maybe array!):
	(iteration from left to right)

	- Accept lambda function And an initial accumulation value.
		the lambda function take generally 4 arguments,
			The -1st- argument (required):
				is the accumulation of values that will eventually be the final results.
			The -2nd- argument :
				is the current item.
			The -3rd- argument (optional):
				is the index of (item+1).
			The -4th- argument (optional):
				the array.
	- Syntax : filter((acc,cur) => (acc..), initial_value_of_acc).
	- return final accumulation.
*/
const reduceTest1 = [1,2,3,4].reduce((acc,cur) => cur + acc , 0);
log(reduceTest1); // 1 + 2 + 3 + 4 = 10

const reduceTest2 = [ [1,2,3],['A','B','C'],[10,20,30] ]
					.reduce((acc,cur) => acc.concat(cur) , []);
log(reduceTest2); // [ 1, 2, 3, 'A', 'B', 'C', 10, 20, 30 ]


/*
	Full example : Filter & Map & Reduce Together!

	Note :
	isEven & half & toAvg are a Functions!
	because with functional programming style you cannot work with a global variable!
	(PURE FUNCTION)
*/
const isEven = (x) => !(x&1); // or (x) => x % 2 === 0
const half = (x) => x/2;
const toAvg = (acc,cur,i,arr) => i < arr.length-1 ? acc + cur : (acc+cur)/arr.length;

const myfun = nums => nums
			.filter(isEven)
			.map(half)
			.reduce(toAvg,0)
			
log(myfun([1,2,3,4,5,6])) // isEven: 2,4,6 | half: 1,2,3 | toAvg: (1+2+3)/3 = 2


/*
	More Examples :
	Compose Functions - with ReduceRight()
	Like reduce() but the iteration from right to left.
*/
const compose = (...fns) => {
	(x) => fns.reduceRight((acc,curr) => curr(acc) ,x)
};


/*
	for more explanation show this videos ♥
	https://www.youtube.com/watch?v=yXJtrxVZmT4&pbjreload=10
	https://www.youtube.com/watch?v=HvMemAgOw6I
 * */


/*
	For more informations visit:
	http://es6-features.org/

	-------------------------------------
	By : Zakaria Chahboun

	27/10/2017
	31/10/2017

	twitter : @Zaki_Chahboun



       -shhhhhhhhhhy/.  .:shhhhhhhhhhy+-    o.         `+hh.     -+       `....`     ``...``        
        `ommmmmmmmyodh  /mssmmmmmmmmyodd    mNy`     `+mMNh.   -hMy    `/hNMMMNds. .odNMMMNd+`      
                 -hMMo  /MMh        :MMd    mMM-   .omMNh:     +MMy   `yMMMMMMMMMNsNMMMMMMMMMh`     
                /mMN+   /MMd        /MMd    mMM- .omMNy-       +MMy   :MMMMMMMMMMMMMMMMMMMMMMM+     
              `oMMd-    /MMd        /MMd    mMM-oNMNy-         +MMy   /MMMMMMMMMMMMMMMMMMMMMMMo     
              :MMy`     /MMy        :NMd    mMN-hdy-`          /NMy   .NMMMMMMMMMMMMMMMMMMMMMN-     
            ```o+       :sshdddddddddyoo    soyddddddddds:`    `-+o    /NMMMMMMMMMMMMMMMMMMMM+      
          `smmh.        :dysyyyyyyyysyhy    hhysyyyyyyyysyd-   `/ys     :mMMMMMMMMMMMMMMMMMm/       
         .hMMh.         /MMh        /MMd    mMM-        mMM-   +MMy      .oNMMMMMMMMMMMMMNs.        
        /mMNo`          /MMd        /MMd    mMM-        mMM-   +MMy        .omMMMMMMMMMNs.          
      `sNMm:            /MMd        /MMd    mMM-        mMM-   +MMy          .+dMMMMMmo.            
      /MMh:.......`     /MMd        /MMd    mMM-        mMM-   +MMy            `:hMh/`              
      /hohNNNNNNNNd/`   /Ny-        `+md    md/         -hM-   `omy              `-`                
      `-/+++++++++++:   .-            `:    :`            -.     `:                                 

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function Test(name) {
// 	if (typeof Test.instance == 'object') {
// 		return Test.instance;
// 	}
// 	this.name = name;
// 	Test.instance = this;
// }
//
// let a = new Test('a');
// // Test.instance = {};
// let b = new Test();
//
// console.log(a === b);


//-------------------------------------------------------------------------------------------------------------------//


// function Test(name) {
// 	let instance = this;
// 	this.name = name;
// 	Test = function () {
// 		return instance;
// 	};
// }
//
// let a = new Test('a');
// Test.prototype.lastName = 'alpha';
// let b = new Test('b');
//
// console.log(a === b, a.lastName, b.lastName);


//-------------------------------------------------------------------------------------------------------------------//


let Test = (function () {
	let instance;
	return function (name) {
		if (typeof instance === 'object') {
			return instance;
		}
		instance = this;
		this.name = name;
	};
})();

let a = new Test('a');
Test.prototype.lastName = 'alpha';
let b = new Test('b');

console.log(a === b, a.lastName, b.lastName);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



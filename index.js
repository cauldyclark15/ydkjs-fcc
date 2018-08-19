// 'use-strict';

// function scopeTester() {
//   return function nextLevel(a) {
//     console.log('\n\n\n', a + b, '\n\n\n');
//     var b = 200;
//   };
// }

// var nextLevel = scopeTester();
// nextLevel(2);

// var isThisUNDEFINED = null;

// console.log(typeof isThisUNDEFINED);

// function foo(a) {
//   var b = 2;

//   function bar() {
//     console.log('\n\n\n\n', a, b, c, '\n\n\n\n');
//   }

//   var c = 3;
// }

// foo(1000);

var numGeneral = 2;

function foo() {
  var numGeneral = 3;
  console.log('inside ***', numGeneral);
}

foo();

console.log('global +++', numGeneral);

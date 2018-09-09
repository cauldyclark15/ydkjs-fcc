function countdownCounter(name) {
  var myNumber = 10;

  function decrementor() {
    console.log(--myNumber, ' This is owned by ' + name);
  }

  return decrementor;
}

var myCountdownCounter = countdownCounter('luffy');

myCountdownCounter();
myCountdownCounter();

var myCountdownCounter2 = countdownCounter('goku');

myCountdownCounter2();
myCountdownCounter2();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();
// myCountdownCounter();

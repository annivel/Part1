// 2620. Counter
function createCounter(n: number): () => number {
  return function () {
    return n++; // return the current value, then increment
  };
}

//2665. Counter II
/*
type Counter = { ... } creates a type alias that describes the shape/structure of an object. 
It's a compile-time contract. In Java, this is equivalent to an interface"
*/
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

/*The Counter type ensures that createCounter2() returns an object with those all specific methods in Counter. 
Any missing method or wrong return type will cause a compile error.
*/
function createCounter2(init: number): Counter {
  const defaulCounter = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: () => {
      return (init = defaulCounter);
    },
  };
}

const counter2 = createCounter2(0);
console.log(counter2.increment());
console.log(counter2.reset());
console.log(counter2.decrement());

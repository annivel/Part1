// 2620. Counter
function createCounter(n: number): () => number {
  return function () {
    return n++; // return the current value, then increment
  };
}

//2665. Counter II
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

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

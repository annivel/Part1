export {};
//2635. Apply Transform Over Each Element in Array
// type Fn = (n: number, i: number) => number;

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let returnedArray: number[] = [];

  arr.forEach((element, index) => {
    returnedArray.push(fn(element, index));
  });
  return returnedArray;
}

/*
map:
Transforms every element
Calls fn(element, index) and uses the result
Pushes the transformed value
*/
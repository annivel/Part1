//2634. Filter Elements from Array

// Define a type for any function that takes 2 numbers and returns anything
// This is like a "contract" - any function assigned to type Fn must follow this signature
type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  var filteredArr: number[] = [];

   // 'element' is the actual value (e.g., -2, -1, 0, 1, 2)
  // 'index' is the position (e.g., 0, 1, 2, 3, 4)
  arr.forEach((element, index) => {
    // Check if the result of fn is "truthy" (not false, 0, "", null, undefined, or NaN)
    // This is different from checking === true!
    // For example: if fn returns -1, that's truthy even though -1 !== true
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });
  return filteredArr;
}



/*
In TS these values are falsy:
false
0
""
null
undefined
NaN
*/
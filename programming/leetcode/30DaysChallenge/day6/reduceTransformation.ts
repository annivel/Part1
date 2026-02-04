// 2626. Array Reduce Transformation
/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/
export {};

type Fn = (accum: number, curr: number) => number;

// first solution
function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) {
    return init;
  }

  let val: number = 0;
  nums.forEach((element, index) => {
    if (index === 0) {
      val = fn(init, element); //keep in mind this structure: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
    } else {
      val = fn(val, element);
    }
  });
  return val;
}

// second solution
function reduce2(nums: number[], fn: Fn, init: number): number {
  let val = init; // Start with init instead of 0
  nums.forEach((element, index) => {
    val = fn(val, element);  // No if-statement is needed since we just need to return init value if array is empty. So the forEach won't execute for empty array.
  });
  return val;
}

export {};

//2623. Memoize (Solved with AI help)
type Fn = (...params: number[]) => number;
type MemoizedFn = Fn & { getCallCount: () => number };

function memoize(fn: Fn): MemoizedFn {
  let cache = new Map<string, number>();
  let callCount: number = 0;
  const memoized = (...args: number[]) => {
    let key: string = args.toString();
    if (cache.has(key)) {
      return cache.get(key)!;
    } else {
      const result = fn(...args);
      callCount++;
      cache.set(key, result);
      return result;
    }
  };
  memoized.getCallCount = () => callCount;
  
  return memoized;
}
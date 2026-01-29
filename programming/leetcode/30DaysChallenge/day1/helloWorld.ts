function createHelloWorld() {
  // high-order function example
  return function (...args: any[]): string {
    return "Hello World";
  };
  // ...args: unknown[] -> in tscofig.json (compiler setting) strict is set to true. It doesn't allow implicit any[] types
}

const f = createHelloWorld();
console.log(f());
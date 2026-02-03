function createHelloWorld() {
  // high-order function example
  // ...args: any[] -> in tscofig.json (compiler setting) strict is set to true. It doesn't allow implicit any[] types
  return function (...args: any[]): string {
    return "Hello World";
  };
}

const f = createHelloWorld();
console.log(f());
type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }
    let accumvValue: number = x;
    for (let i = functions.length - 1; i >= 0; i--) {
        accumvValue = functions[i](accumvValue)
    }
    return accumvValue;
  };
}

// const fn = compose([x => x * 2, x => x + 10, x => x - 3])
// f(g(h(5)))
// Step 1: result = h(5)
// Step 2: result = g(result)
// Step 3: result = f(result)
// Return result

/*
functions = [f, g, h]  // where f(x)=x*2, g(x)=x+10, h(x)=x-3
x = 5
typescriptaccumvValue = 5

i = 2: accumvValue = functions[2](5) = h(5) = 2
i = 1: accumvValue = functions[1](2) = g(2) = 12  
i = 0: accumvValue = functions[0](12) = f(12) = 24

return 24
*/
//2666. Allow One Function Call
export{};
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let hasBeenCalled = false; // we need flag here to mark whether we already called the function or not.
    
    // inner function
    return function (...args) { // Rest parameters  (...args) collect arguments into an array
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn(...args); //Spread syntax (...args) unpacks an array into individual arguments
        }
        return undefined;
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
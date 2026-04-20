/* Working with promises
*
*  Listing 4.16 - Contents of src/promises.ts.
*/

// Create a function that returns a promise -
// By passing ServerResponse.prototype.end function to promisify.
import { ServerResponse } from "http";
import { promisify } from "util";
// Using AS keyword to override the type inferred by the TS compiler.
export const endPromise = promisify(ServerResponse.prototype.end) as
    (data: any) => Promise<void>

/* Executing custom code
*
*  Listing 4.18 - Adding a function in src/promise.ts
*/

// Wrapping the write method defined by the ServerResponse class in a promise.
export const writePromise = promisify(ServerResponse.prototype.write) as
    (data: any) => Promise<void>;
"use strict";
/* Working with promises
*
*  Listing 4.16 - Contents of src/promises.ts.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePromise = exports.endPromise = void 0;
// Create a function that returns a promise -
// By passing ServerResponse.prototype.end function to promisify.
const http_1 = require("http");
const util_1 = require("util");
// Using AS keyword to override the type inferred by the TS compiler.
exports.endPromise = (0, util_1.promisify)(http_1.ServerResponse.prototype.end);
/* Executing custom code
*
*  Listing 4.18 - Adding a function in src/promise.ts
*/
// Wrapping the write method defined by the ServerResponse class in a promise.
exports.writePromise = (0, util_1.promisify)(http_1.ServerResponse.prototype.write);

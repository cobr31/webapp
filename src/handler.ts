// Defining http requests.

/*
import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
	/!*  Used type annotations to help describe the way the results from reading the file are presented.
        The type of the first argument of the callback is Error | null and is used to indicate the outcome.
    *!/
	readFile("data.json", (err: Error | null, data: Buffer) => {
		/!*  If the first argument is null, then the operation has been completed successfully,
		    and the contents of the file will be available in the second argument, whose type is Buffer.
		    (Buffers are how Node.js represents arrays of bytes.)
	    *!/
		if (err == null) {
			res.end(data, () => console.log("File sent"));
		/!*	If the first argument isn’t null, then the Error object will
            provide details of the problem that prevented the file from being read.
        *!/
		} else {
			console.log(`Error: ${err.message}`);
			res.statusCode = 500;
			res.end();
		}
	});
};
*/

/* Working with promises
*
*  Listing 4.12 - Using a Promise
*/

/*import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs";
import { readFile } from "fs/promises";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
	const p: Promise<Buffer> = readFile("data.json");
	// Promise produces a Buffer object when async operation is complete,
	// promise is either resolved or rejected.
	p.then((data: Buffer) => res.end(data, () => console.log("File sent")));
	// Catch method handles error produced by a rejected promise.
	p.catch((err: Error) => {
		console.log(`Error: ${err.message}`);
		res.statusCode = 500;
		res.end();
	});
};*/



/* Working with promises
*
*  Listing 4.13 - Using a Promise - simplify code by chaining promise methods
*/
/*
import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
	readFile("data.json")
		.then((data: Buffer) => res.end(data, () => console.log("File sent")))
		.catch((err: Error) => {
			console.log(`Error: ${err.message}`);
			res.statusCode= 500;
			res.end();
		});
};
*/

/* Working with promises
*
*  Listing 4.14 - Using a Promise - allow asynchronous operations
*/

/*import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

export const handler =  async (req: IncomingMessage, res: ServerResponse)  => {
	const data: Buffer = await readFile("data.json")
		res.end(data, () => console.log("File sent"))

};*/

/* Working with promises
*
*  Listing 4.15 - Using a Promise - add error handler with async operations.
*/

/*import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
	try {
		const data: Buffer = await readFile("data.json");
		res.end(data, () => console.log("File sent"));
		// The type of the value provided to the catch exception is any, not Error,
		// because JS doesn’t restrict the types that can be used to represent errors.
	} catch (err: any) {
		console.log(`Error: ${err?.message ?? err}`);
		res.statusCode = 500;
		res.end();
	}
};*/

// Listing 4.16 (See promises.ts)

/* Working with promises
*
*  Listing 4.17 - Using a Promise in sfc/handler.ts
*/

/*import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
import { endPromise } from "./promises";

export const handler = async (req:IncomingMessage, res: ServerResponse) => {
    try {
        const data: Buffer = await readFile("data.json");
        // promisify creates bind method,
        // associates the ServerResponse object with a new function
        // passing the data to be sent to the client.
        await endPromise.bind(res)(data);
        console.log("File sent");
    } catch (err:any) {
        console.log(`Error: ${err?.message ?? err}`);
        res.statusCode = 500;
        res.end();
    }
};*/

/* Executing custom code
*
*  Listing 4.18/19 - Adding a function in src/promise.ts
*/

/* Executing custom code
*
*  Listing 4.20 - A demo of a Blocking operation in src/handler.
*
*/

import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs/promises";
import { endPromise, writePromise } from "./promises";

const total = 2_000_000_000;
const iterations = 5;
let shared_counter = 0;

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    const request = shared_counter++;
    for (let iter = 0; iter < iterations; iter++) {
        for (let count = 0; count < total; count++) {
            count++;
        }
        const msg = `Request: ${request}, Iteration: ${(iter)}`;
        console.log(msg);
        await writePromise.bind(res)(msg + "\n");
        }
    await endPromise.bind(res)("Done");
};



































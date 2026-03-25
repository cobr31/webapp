# Node Concurrency

<br>

_Ref:_ _Mastering Node.js Web Developer_   

---

**Create a simple web app**


Listing 4.3   

## [ts compiler configuration](index.md/#ts-compiler-configuration-and-type-package-tools)   


Listing 4.4   

## [configure ts tools](index.md/#)   


Listing 4.5   

## [configure start section of package.json](index.md/#configure-start-section-of-packagejson)   


Listing 4.6 

Defining http requests.   

## [src/handler.ts](index.md/#define-http-requests)


Listing 4.7

Create a HTTP server listening on port 5000,    
using the handler function from handler.ts.

## [src/server.ts](index.md/#create-http-server)   


Listing 4.8

Populate data.json file.   

## [data.json](#data.json)   


<br>

---

Listing 4.10    

Read file contents with Node.js API.

## [src/handler.ts](index.md/#reading-file-contents-with-nodejs)

```ts
import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

export const handler = (req: IncomeMessage, res: ServerResponse) => {
    readFile("data.json", (err: Error | null, data: Buffer) => {
        if (err == null) {
            res.end(data, () => console.log("File sent"));
        } else {
            console.log(`Error: ${err.message}`);
            res.statusCode = 500;
            res.send();
        }
    });
};
```



<br>

auth: c.a. brown

ref: Adam Freeman - Mastering Node.js Web Developer



 



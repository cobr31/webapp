
Listing 4.2

## Configure ts tools

```shell
npm install --save-dev typescript@5.2.2

npm install --save-dev tsc-watch@6.0.4
```

Listing 4.3

## TS Compiler configuration and type package tools

```shell
npm install --save-dev @tsconfig/node20

npm install --save @types/node@20.6.1
```

Listing 4.4

## Configure TS Compiler with tsconfig.json

```shell
{
  "extends": "@tsconfig/node20/tsconfig.json",
    "compilerOptions": {
      "rootDir": "src",
      "outDir": "dist",
    }
}
```

Listing 4.5   

## Configure start section of package.json.   

```json
{
"name": "webapp",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"start": "tsc-watch --onsuccess \"node dist/server.js\""
},
    "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
        "tsc-watch": "^6.0.4",
            "typescript": "^5.2.2"
    }
}
```

Listing 4.6   

## Define HTTP requests

```ts
import { IncomingMessage, ServerResponse } from "http";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
res.end("Hello World");
};
```

Listing 4.7   

## Create HTTP server

```ts
import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;

const server = createServer(handler);

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
```

Listing 4.8

## data.json

```json
{
    "products": [
        {   "id": 1, "name": "Kayak", "category": "Watersports",
            "description": "A boat for one person", "price": 275  },
        {   "id": 2, "name": "Life-jacket", "category": "Watersports",
            "description": "Protective and fashionable", "price": 48.95  },
        {   "id": 3, "name": "Soccer ball", "category": "Soccer",
            "description": "FIFA-approved size and weight", "price": 19.50  },
        {   "id": 4, "name": "Corner Flags", "category": "Soccer",
            "description": "Give your playing field a professional touch", "price": 34.95 }
    ]
}
```

<br>

Listing 4.10

## reading file contents with node.js   

```ts 
import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs";

    export const handler = (req: IncomingMessage, res: ServerResponse) => {
    /*  Used type annotations to help describe the way the results from reading the file are presented.
    The type of the first argument of the callback is Error | null and is used to indicate the outcome.
    */
    readFile("data.json", (err: Error | null, data: Buffer) => {
    /*  If the first argument is null, then the operation has been completed successfully,
    and the contents of the file will be available in the second argument, whose type is Buffer.
    (Buffers are how Node.js represents arrays of bytes.)
    */
        if (err == null) {
        res.end(data, () => console.log("File sent"));
        /*	If the first argument isn’t null, then the Error object will
        provide details of the problem that prevented the file from being read.
        */
        } else {
        console.log(`Error: ${err.message}`);
        res.statusCode = 500;
        res.end();
        }
    });
};
```

Listing 4.11   

## Handling events in src/server.ts    

```ts
import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;

const server = createServer();

server.on("request", handler)
server.listen(port);

server.on("listening", () => {
    console.log(`(Event) Server listening on port ${port}`);
});

```


































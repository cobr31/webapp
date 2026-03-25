
Listing 4.2

## Configure ts tools

```shell
npm install --save-dev typescript@5.2.2

npm install --save-dev tsc-watch@6.0.4
```

Listing 4.3

## TS Compiler config and type package tools

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



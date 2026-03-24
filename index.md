

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
           "description": "Give your playing field a professional touch", "price": 34.95  }
    ]
}
```

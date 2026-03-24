

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


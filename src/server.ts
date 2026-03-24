import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;

const server = createServer(handler);

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});

// Create a HTTP server listening on port 5000,
// using the handler function from handler.ts.

"use strict";
// Create a HTTP server listening on port 5000,
// using the handler function from handler.ts.
Object.defineProperty(exports, "__esModule", { value: true });
/*import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;

const server = createServer(handler);

server.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});*/
// Listens for http requests as events
const node_http_1 = require("node:http");
const handler_1 = require("./handler");
const port = 5000;
const server = (0, node_http_1.createServer)();
/*server.on("request", handler)
server.listen(port);*/
/* Executing custom code
*
*  Listing 4.19 - AFiltering requests in src/server.ts
*/
server.on("request", (req, res) => {
    if (req.url?.endsWith("favicon.ico")) {
        res.statusCode = 404;
        res.end();
    }
    else {
        (0, handler_1.handler)(req, res);
    }
});
server.listen(port);
server.on("listening", () => {
    console.log(`(Event) Server listening on port ${port}`);
});

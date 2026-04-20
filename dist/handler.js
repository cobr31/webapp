"use strict";
// Defining http requests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// import { readFile } from "fs/promises";
const promises_1 = require("./promises");
const total = 2000000000;
const iterations = 5;
let shared_counter = 0;
const handler = async (req, res) => {
    const request = shared_counter++;
    for (let iter = 0; iter < iterations; iter++) {
        for (let count = 0; count < total; count++) {
            count++;
        }
        const msg = `Request: ${request}, Iteration: ${(iter)}`;
        console.log(msg);
        await promises_1.writePromise.bind(res)(msg + "\n");
    }
    await promises_1.endPromise.bind(res)("Done");
};
exports.handler = handler;

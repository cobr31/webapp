"use strict";
// Defining http requests.
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fs_1 = require("fs");
const handler = (req, res) => {
    /*  Used type annotations to help describe the way the results from reading the file are presented.
        The type of the first argument of the callback is Error | null and is used to indicate the outcome.
    */
    (0, fs_1.readFile)("data.json", (err, data) => {
        /*  If the first argument is null, then the operation has been completed successfully,
            and the contents of the file will be available in the second argument, whose type is Buffer.
            (Buffers are how Node.js represents arrays of bytes.)
        */
        if (err == null) {
            res.end(data, () => console.log("File sent"));
            /*	If the first argument isn’t null, then the Error object will
                provide details of the problem that prevented the file from being read.
            */
        }
        else {
            console.log(`Error: ${err.message}`);
            res.statusCode = 500;
            res.end();
        }
    });
};
exports.handler = handler;

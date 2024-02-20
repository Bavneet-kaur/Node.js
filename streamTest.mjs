/*Data streams support asynchronous reading and writing to files.
This type of reading/writing is useful when working with web-based
applications where you need to update files from different ends and
at different times. */
import fs from "fs";
import { Transform } from "stream";

// reading into given file(line by line reading)
let stream = fs.createReadStream("stream.txt");
stream.on("data", function (data) {
  let chunk = data.toString();
  console.log(chunk);
});
// writing into new file(this will create a new file)
let stream2 = fs.createWriteStream("stream2.txt");
stream2.write("Line1 -------\n");
stream2.write("Line2------\n");
stream2.write("Line3----\n");

// transforming streams
/*A transform connects the read stream to a write stream.
Transform acts as the middle piece in piping the read stream to the
write stream. Data starts from the read stream, moves into the
transform, and finally moves into the write stream. */
const fileReadStream = fs.createReadStream("stream.txt");
const fileWriteStream = fs.createWriteStream("stream2.txt");

const trans = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase()); //just to see the modification in the data
  },
});

//pipe is used to copy one thing to another with/without transformation
fileReadStream.pipe(trans).pipe(fileWriteStream); 
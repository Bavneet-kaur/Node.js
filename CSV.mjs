import * as csv from "csv-parse";
import * as stringify from 'csv-stringify';
import fs from "fs";

// reading csv file
// fs.createReadStream("num.csv")
//   .pipe(csv.parse({ delimiter: "," }))
//   .on("data", function (row) {
//     console.log(row);
    // console.log("Getting the first element of the particular row", row[0]);
  // });

//   writing into csv file
const write = fs.createWriteStream("num.csv");
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
const columns = ["n1", "n2", "n3"];
const stringifier = stringify.stringify({ header: true, columns: columns });
for (let i = 0; i < data.length; i++) {
  stringifier.write(data[i]);
}
stringifier.pipe(write);
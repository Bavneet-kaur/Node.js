import fs from "fs";
//async programming -- callback method
fs.readFile("async.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});
console.log("Done! bro");

// async programming -- promises
const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString());
      }
    });
  });
};
getFile("async .txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// async programming -- aynsc and await
async function traceFile(fileName) {
  let data = fs.promises.readFile(fileName);
  return (await data).toString();
}
console.log(await traceFile("async.txt"));

// async programming -- blockingand non-blocking I/O
async function getFile(fileName) {
  let data = fs.promises.readFile(fileName);
  return (await data).toString();
}
//let dataGet = getFile("async.txt");
let dataGet = fs.readFileSync("async.txt");
console.log("Code here!");
console.log("More code!");
console.log(await dataGet.toString());
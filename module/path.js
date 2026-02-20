//path.js
const path = require("path");
const fs = require("fs");
const { error } = require("console");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, ".js"));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //parse => root , dir, base ,ext
console.log(path.format({ dir: "D:\\git\\node.js", base: "sample.text" }));

console.log(path.join("D:\\git", "node.js", "module", "sampel.text"));

const filepath = path.join(__dirname, "package.json");
fs.readFile(filepath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
// const data = fs.readFileSync(filepath, "utf-8");
// console.log(data);

console.log("end of prog");

fs.writeFile(__dirname + "\\todo.text", "sample...", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("write donne");
});

console.log("write donne");

const { Console } = require("console");
const { boardList } = require("./board");
const fs = require("fs"); //내장 모듈.

//console.log(console);
//console.table(boardList());
const output = fs.createWriteStream("./output/stdout.log");
const errorLog = fs.createWriteStream("./output/stderr.log");

const logger = new Console({ stdout: output, stderr: errorLog });
// logger.log("현재 시간은" + new Date());
// logger.error("에러가 발생");

module.exports = { logger };

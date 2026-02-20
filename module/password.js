const { rejects } = require("assert");
const crypto = require("crypto");
const { resolve } = require("dns");

const pw = crypto.createHash("sha512").update("test1234").digest("base64");
console.log(pw);

async function createPassword() {
  //salt 생성(달라지는 시드값)
  const salt = await new Promise((resolve, rejects) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        console.log("error=>", err);
        rejects(err);
      }
      console.log(buf.toString("base64"));
      resolve(buf.toString("base64"));
    });
  });
  console.log(`salt=>${salt}`);

  //  암호화된 비밀번호.
  crypto.pbkdf2("test1234", salt, 100000, 64, "sha512", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.toString("base64"));
  });
  //암호화평문,salt값,반복해시값 ,길기 , 해시함수 , callback함수
}

createPassword();

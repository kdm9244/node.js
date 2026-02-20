async function main() {}
let data = 10;

const p1 = new Promise(function (resolve) {
  setTimeout(() => {
    console.log("1번째");
    data += 5;
    resolve(data);
  }, 3000);
});

//비동기방식코드 -> 동기 방식코드

p1.then((data) => {
  //
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("2번째");
      data *= 2;
      resolve(data);
    }, 1000);
  });
}).then((param) => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("3번째");
      data -= 7;
      console.log(`data =>${data}`);
      resolve(result);
    }, 2000);
  });
  try {
  } catch (err) {
    console.error(err);
  }
});

main();

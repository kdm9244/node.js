// //promise.js
// //promise 객체: pending/ fulfilled/ rejected
// fetch("./MOCK_DATA.json")
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log(result);
//   });

// console.log("end dof prog");

//setTimeout();
//1번째 => 2초 작업,
//2번째 => 3초 작업,
//3번째 => 1초 작업, => 6초 작업,
//비동기방식 처리가 시간강의 이점
//Promise => 비동기처리를 동기방식의 코드

const promise = new Promise(function (resolve, reject) {
  console.log("promise call.");
  resolve("OK");
});
promise //
  .then((param) => {
    console.log(param);
    return 1; //promise 처리
  })
  .then((param) => {
    console.log(param);
  })
  .catch((param) => {
    console.error(param);
  });

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
});

setTimeout(function () {
  console.log("1초 후에 실행");
}, 1000);

const job = setInterval(function () {
  console.log("1초마다 실행");
}, 1000);

setTimeout(() => {
  clearInterval(job);
  console.log("종료");
}, 5000);

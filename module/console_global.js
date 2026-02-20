console.log("hello world"); //일반적인 로그
console.log("hello %s", "world"); //일반적인 로그 %s를 사용해서 문자열 데이터를 파라미터로 전달

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "Jeremy@maile.com" },
];
console.table(arr);
const obj = {
  Student: {
    grade1: { class1: {}, class: {} },
    grade2: { class1: {}, class: {} },
    teachers: ["Jhhn Doe", "Jeremy Go"],
  },
};
console.dir(obj, { depth: 1, colors: true });

console.time("time for for-loop");
for (let i = 0; i < 99999; i++) {
  console.log(i);
}
console.timeEnd("tiem for for-loop");

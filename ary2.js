//reduce()- 이전 순번의 결과를 다음 순번의 매개값으로 활용

result = [10, 15, 20, 25, 30].reduce((accm, elem, idx, arry) => {
  console.log(idx, "->", accm, elem);
  if (elem >= 20) {
    const li = document.createElement("li");
    li.innerText = elem;
    accm.appendChild(li);
  }
  return accm;
}, document.querySelector("#list"));

console.log(result);

console.clear();

//Male 사람의 급여 합계
result = ary.reduce((accm, elem, idx, arry) => {
  console.log(idx, "->", accm, elem);

  const { salary, gender } = elem;
  if (gender == "Male") {
    accm += salary;
  }

  return accm;
}, 0);
console.log("Male의 급여의합은? " + result);

//Female의 10000 이하인 사람들의 번호/이름(fn+ln)/이메일/급여
//새로운 배열로 생성

const female_under_10000 = (accm, elem) => {
  const { gender, id, frist_name, last_name, salary, email } = elem;
  if (gender == "Female" && salary <= 10000) {
    const obj = { id, name: frist_name + "-" + last_name, email, salary };
    accm.push(obj);
  }
  return accm;
};

result = ary.reduce(female_under_10000, []);
console.log(result);

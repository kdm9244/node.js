const { ary } = require("./data");

// 1. Male만 필터링해서 그룹화 (첫 번째 시도)
const maleOnly = ary.reduce(
  (accm, elem) => {
    if (elem.gender == "Male") {
      accm.Male.push(elem);
    }
    return accm;
  },
  { Male: [] },
);
console.log(maleOnly);

// 2. 성별 전체를 그룹화하는 함수 (두 번째 시도)
const group_by_gender = (accm, elem) => {
  // 해당 성별 키가 없으면 배열 초기화
  if (accm[elem.gender] === undefined) {
    accm[elem.gender] = [];
  }
  accm[elem.gender].push(elem.first_name);
  return accm;
};

// 오류 지점 수정: 'const result' -> 'const finalResult' (변수명 변경)
const finalResult = ary.reduce(group_by_gender, {});
console.log(finalResult);

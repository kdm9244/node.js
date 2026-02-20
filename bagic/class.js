//객체(Object) - 학생(개념) - 학생(실체)
class Student {
  //값을 저장(속성) --> 핵성번호, 이름, 키 ,몸무게, 점수
  constructor(StudentNo, StudentName, height) {
    //생성자

    this.StudentNo = StudentNo;
    this.StudentName = StudentName;
    this.height = height;
  }
  //동작을 저장(메소드)
  showInfo() {
    return `학번은 ${this.StudentNo}이고,이름은 ${this.StudentName}`;
  }
}

//인스턴스 생성.
const s1 = new Student("S001", "홍길동", 176.9);
console.log(s1.showInfo());
const s2 = new Student("S002", "박민수", 180.9);

const obj = {
  name: "Hong",
  age: 20,
  friends: ["KIM", "PARK", "CHOI"],
  pets: [
    { name: "멍이", age: 3, friends: ["누렁이", "멍뭉이"] },
    { name: "야옹이", age: 2 },
  ],
  showInfo: function () {
    return `이름은 ${this.name}`;
  },
};
console.log(obj["pets"][0]["friends"][0]);
//console.log(window);

function Member(memberName, memberNo) {
  this.memberNo = memberNo;
  this.memberName = memberName;
  this.showInfo = function () {
    return `번호는 ${this.memberNo}. 이름은 ${this.memberName}`;
  };
}

const m1 = Member("M001", "User01"); //인스턴스
console.log(window, showInfo());

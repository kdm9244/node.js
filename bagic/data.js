const data = `[{"id":1,"first_name":"Aile","last_name":"Duddridge","email":"aduddridge0@rakuten.co.jp","gender":"Female","salary":8054},
{"id":2,"first_name":"Paige","last_name":"Van Zon","email":"pvanzon1@reddit.com","gender":"Male","salary":11881},
{"id":3,"first_name":"Antonius","last_name":"Ganter","email":"aganter2@wired.com","gender":"Male","salary":8070},
{"id":4,"first_name":"Alis","last_name":"Carous","email":"acarous3@amazon.de","gender":"Female","salary":4766},
{"id":5,"first_name":"Tabby","last_name":"Bilbrey","email":"tbilbrey4@fema.gov","gender":"Female","salary":12397},
{"id":6,"first_name":"Ciro","last_name":"Aiskrigg","email":"caiskrigg5@smh.com.au","gender":"Male","salary":10366},
{"id":7,"first_name":"Otto","last_name":"Lanphier","email":"olanphier6@harvard.edu","gender":"Male","salary":12994},
{"id":8,"first_name":"Kassia","last_name":"Cordeau]","email":"kcordeau7@netlog.com","gender":"Female","salary":10061},
{"id":9,"first_name":"Daphna","last_name":"Bewicke","email":"dbewicke8@businessinsider.com","gender":"Female","salary":13134},
{"id":10,"first_name":"Waverley","last_name":"Catlette","email":"wcatlette9@marriott.com","gender":"Male","salary":10121},
{"id":11,"first_name":"Toddie","last_name":"Keble","email":"tkeblea@weibo.com","gender":"Male","salary":6627},
{"id":12,"first_name":"Wright","last_name":"Fairpo","email":"wfairpob@naver.com","gender":"Male","salary":10201},
{"id":13,"first_name":"Ralina","last_name":"Katte","email":"rkattec@ovh.net","gender":"Female","salary":5361},
{"id":14,"first_name":"Dante","last_name":"Corneck","email":"dcorneckd@bravesites.com","gender":"Male","salary":5613},
{"id":15,"first_name":"Frederich","last_name":"Borsnall","email":"fborsnalle@bravesites.com","gender":"Male","salary":6341},
{"id":16,"first_name":"Vittorio","last_name":"Sealove","email":"vsealovef@hostgator.com","gender":"Male","salary":11344},
{"id":17,"first_name":"Morgen","last_name":"Aasaf","email":"maasafg@ehow.com","gender":"Female","salary":8635},
{"id":18,"first_name":"Eleanor","last_name":"Kenny","email":"ekennyh@xrea.com","gender":"Female","salary":8500},
{"id":19,"first_name":"Dallon","last_name":"Cathcart","email":"dcathcarti@wikispaces.com","gender":"Male","salary":11872},
{"id":20,"first_name":"Torrence","last_name":"Eustice","email":"teusticej@cdc.gov","gender":"Male","salary":11114}]`;

//json -> object
const ary = JSON.parse(data);
//console.log(ary);

//object -> json
const json = JSON.stringify(ary);
//console.log(json);

//sort()
// console.log(["Hello", "Hi", "Good", "world"].sort());
// console.log(
//   [10, 30, 21, 45, 8, 9].sort(
//     (n1, n2) =>
//       //오름차순 -값을 반환,
//       n2 - n1,
//   ),
// );
//id순으로 정렬함수
const order_by_id = (obj1, obj2) => obj2.id - obj1.id;

//salary 오름차순
const order_by_salary = (obj1, obj2) => obj2.salary - obj1.salary;

//first_name
const order_by_fn = (obj1, obj2) => {
  if (obj1.frist_name < obj2.frist_name) {
    return -1;
  } else {
    return 1;
  }
};

let result = ary.sort(order_by_fn);
//console.log(result);

if ("hello" > "nice") {
  // console.log("hello");
} else {
  //console.log("nice");
}

function getMember() {
  return ["user01", "user02", "user03"];
}

//module.exports = { ary };

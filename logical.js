// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가 : short-circuit evaluation

const obj1 = { name: "🌞" };
const obj2 = { name: "👻", owner: "주인장" };

if (obj1 && obj2) {
  console.log("둘다 true");
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야할 경우
// 조건이 falsey일 때 || 무언가를 해야할 경우

function changeOwner(obj) {
  if (!obj.owner) {
    throw new Error("주인이 없어");
  }
  obj.owner = "바뀐 주인장";
}

function makeNewOwner(obj) {
  if (obj.owner) {
    throw new Error("주인이 있어");
  }
  obj.owner = "새로운 주인";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falsy한 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}

print();

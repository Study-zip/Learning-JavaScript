/***
 * 자료구조 Data Structure
 * 객체의 집합체를 나타낼 수 있는 것
 * 1. 배열 Array
 * 순서대로 처리할 때 유용, 인덱스 Index가 존재한다.
 * 0부터 시작
 *
 * 배열이 제일 많이 쓰이는 자료구조.
 * 특정한 데이터 타입만 넣을 수 있는 Array가 생김.
 */

// 배열 생성 방법
let array = new Array(3);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2, 3, 4, 5, 6, 7, 8);
console.log(array);

const anotherArray = ["n", "a", "m", "i"];
console.log(anotherArray);
array = Array.from("text");
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고 보장해주지 않는다.
// Object와 유사함.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
// 이것을 보완하기 위해서 타입이 절해져 있는 타입 배열이 있음. (Type Collections)
array = Array.from({
  0: "안",
  1: "녕",
  length: 2,
});
console.log(array);
// 인덱스 키와 length만 만들어주면 배열을 만들 수 있다.

// 배열 추가하기
const weather = ["🌞", "🌦️", "🌪️"];

// 배열 아이템을 참조하는 방법
console.log(weather[1]);
console.log(weather[2]);
console.log(weather.length);

for (let i = 0; i < weather.length; i++) {
  console.log(weather[i]);
}

// 추가, 삭제 - 좋지 않은 방식 🙅‍♀️
weather[5] = "🧟";
console.log(weather);
// 인덱스로 추가하는 건 비 추천 - 남아있게 됨.
delete weather[5];
console.log(weather);

weather.length = 0;
console.log(weather);

// 배열의 함수들
// 배열 자체를 변경하는가? 새로운 배열을 반환하는가?
const people = ["👩‍🔬", "👩‍⚖️", "🥷", "🧝‍♀️", "🧞‍♂️"];

// 특정한 오브젝트가 배열인지 체크
// 클래스 이름을 사용하면 Static method
console.log(Array.isArray(people));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(people.indexOf("🧞‍♂️"));

// 배열 안에 특정한 아이템이 존재하는지 체크
console.log(people.includes("👨‍✈️"));

// 추가 - 제일 뒤
let addPeople = people.push("🧚‍♀️");
console.log(people);
console.log(addPeople);

// 추가 - 제일 앞
addPeople = people.unshift("🤷🏻");
console.log(people);

// 제거 - 제일 뒤
let rmPeople = people.pop();
console.log(people);
console.log(rmPeople);

// 제거 - 제일 앞
rmPeople = people.shift(); // 배열 자체를 수정(업데이트)
console.log(people);
console.log(rmPeople);

// 중간에 추가 또는 삭제 | 배열 자체를 수정(업데이트)
const deleted = people.splice(2, 1);
console.log(deleted);
console.log(people);

people.splice(3, 0, "🧖🏼");
console.log(people);

// 잘라진 새로운 배열을 만듦
let newPeople = people.slice(0, 2); // 0, 1만 슬라이스하여 새로운 배열이 만들어짐.
console.log(newPeople);
console.log(people); // 수정되지 않음!
newPeople = people.slice(-1); // 아무것도 넣지 않으면 그대로임!, 음수는 뒤에서부터 자름!
console.log(newPeople);

// 여러개의 배열을 붙여줌
const arr0 = [1, 2, 3];
const arr1 = [4, 5, 6];
const arrAll = arr0.concat(arr1);
console.log(arr0);
console.log(arr1);
console.log(arrAll);

// 순서를 거꾸로 하기
const arrReverse = arrAll.reverse();
console.log(arrReverse);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arrLayer = [
  [1, ["oh"], 2, 3],
  ["nami", "nam"],
];
console.log(arrLayer.flat()); // 1단계 까지만 중첩된 걸 풀어줌.
console.log(arrLayer.flat(2)); // 단계 지정 가능.
arrLayer = arrLayer.flat(3);

// 특정한 값으로 배열을 채우기 - 배열 자체를 수정
arrLayer.fill(0);
console.log(arrLayer);
arrLayer.fill("nam", 1, 3);
console.log(arrLayer);

// 배열을 문자열로 합하기
let textAll = arrLayer.join();
console.log(textAll);
textAll = arrLayer.join(" | ");
console.log(textAll);

// shallow?!
// shallow copy 얕은 복사 - 객체는 메모리 주소를 전달한다.
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어진다.
// Array.from, concat, slice, spread .. 등, Object.assign

const pizza = { name: "🍕", price: 22000 };
const hamburger = { name: "🍔", price: 12000 };
const meat = { name: "🍖", price: 32000 };
const store0 = [pizza, meat];
const store1 = Array.from(store0);

console.log("store0", store0);
console.log("store1", store1);

store1.push(hamburger);
console.log("store0", store0);
console.log("store1", store1);
// 메모리가 다름.

pizza.price = 20000;
console.log("store0", store0);
console.log("store1", store1);

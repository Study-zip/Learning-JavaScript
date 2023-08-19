/*
 * 일급 객체 first-class object
 * 일반 객체처럼 모든 연산이 가능한 것
 * 함수의 매개벼수로 전달
 * 함수의 반환값
 * 할당 명령문
 * 동일 비교대상
 * => 함수가 일반 객체처럼 모든 연산이 가능하면 `일급 함수`
 * 다른 함수를 인자로 받거나(콜백 함수) 반환하는 함수, `고차 함수` Higher-order function
 * 함수 단위로 엮어가는 것, 함수형 프로그래밍
 * 함수 자체를 순수 함수로 만들어야함. 불변성을 유지하기.
 * side effect가 없게끔. 에러 제거, 가독성 높이기
 * 데이터 변경이 없고, 변수 사용 x, 조건문 x, 반복문 x
 */

// Higher-order function
const clothes = ["👙", "👔", "👑", "🩲", "🩳"];

// 배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할 때
clothes.forEach((value) => console.log(value));

function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

// 조건에 맞는(콜백 함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "🍀", price: 0 };
const item2 = { name: "🍄", price: 300 };
const item3 = { name: "🏀", price: 500 };
const products = [item1, item2, item3];
let result = products.find((value) => value.name === "🍄");
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "🍄");
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "🍀");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "🍀");
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.price > 0);
console.log(result);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있다!
// 변환해서 새로운 배열을 생성하기
const nums = [1, 2, 3, 4, 5, 6, 7];
result = nums.map((item) => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap 중첩된 배열을 쫙 펴준다!
result = nums.flatMap((item) => [1, 2]);
console.log(result);
result = ["nami", "blog"].flatMap((text) => text.split(""));
console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경.
const texts = ["hi", "abc"];
texts.sort();
console.log(texts);

const numbers = [0, 1, 203, 5, 807, 70, 1333];
numbers.sort();
console.log(numbers);
// < 0 a가 앞으로 정렬. 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// reduce 배열의 요소를 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result);

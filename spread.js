/**
 * Spread 연산자, 전개구문
 * 모든 Iterable은 Spread 될 수 있다.
 * 순회가 가능한 모든 것들은 펼 수 있다.
 * func(... iterable)
 * [... iterable]
 * {...obj}
 * ES 2018
 */

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 3, 42, 35, 2, 26, 3, 623, 2);

// Array Concat
const nami = ["🌞", "🤔", "💭"];
const love = ["🤖", "👽", "🧐"];
let arr = nami.concat(love);
console.log(arr);

arr = [...nami, "🐹", ...love];
console.log(arr);

// Object
const study = { course: "javascript", location: { address: "not my home" } };
const update = {
  ...study,
  value: "30,000,0000",
};

update.location.address = "school";
console.log(study);
console.log(update);

// 배열의 전개구문
// 과거에는 배열 간 합성을 위해 push(), concat(), splice() 등의 메서드를 사용했다.
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4, 5];

// const arr1 = ["a", "b"];
// const arr2 = arr1;

// arr1 === arr2; // true. 내용이 아닌 참조를 복사함

// const arr1 = ["a", "b"];
// const arr2 = [...arr1];

// arr1 === arr2; // false. 실제로 값만 복사됐을 뿐, 참조는 다름

// 객체의 전개 구문
// 배열과 비슷하게 사용이 가능.
// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = {
//   c: 3,
//   d: 4,
// };

// const newObj = { ...obj1, ...obj2 };

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // { a: 1, b: 1, c: 10}
// const aObj = {
//   ...obj,
//   c: 10,
// };

// // { a: 1, b: 1, c: 1}
// const bObj = {
//   c: 10,
//   ...obj,
// };

// babel
// const arr1 = [1, 2];
// const arr2 = [].concat(arr1, [3, 4, 5]);

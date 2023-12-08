// Array prototype의 메서드
// 1. Array.prototype.map
// const arr = [1, 2, 3, 4, 5];
// const doubleArr = arr.map((item) => item * 2);
// [2, 4, 6, 8, 10]

// React
// const arr = [1, 2, 3, 4, 5];
// const Elements = arr.map((item) => {
//   return <Fragment key={item}>{item}</Fragment>;
// });

// 2. Array.prototype.filter
// const arr = [1, 2, 3, 4, 5];
// const evenArr = arr.filter((item) => item % 2 === 0);
// [2, 4]

// 3. Array.prototype.reduce
// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((result, item) => {
//   return result + item;
// }, 0);
// 15

// Filter와 map의 조합과 reduce를 사용한 배열 처리 비교
// 짝수만 100을 곱해 반환하는 함수
// const arr = [1, 2, 3, 4, 5];

// // [200, 400]
// const result1 = arr.filter((item) => item % 2 === 0).map((item) => item * 100);

// // [200, 400]
// const result2 = arr.reduce((result, item) => {
//   if (item % 2 === 0) {
//     result.push(item * 100);
//   }
//   return result;
// }, []);

// 4. Array.prototype.forEach
// const arr = [1, 2, 3];

// arr.forEach((item) => console.log(item));
// 1, 2, 3

// function run() {
//   const arr = [1, 2, 3];
//   arr.forEach((item) => {
//     console.log(item);
//     if (item === 1) {
//       console.log("finished");
//     }
//     return;
//   });
// }
// run();
// 1
// finished!
// 2
// 3

// 삼항 조건 연산자
// 조건문 ? 참일 때의 값 : 거짓일 때의 값
// gi
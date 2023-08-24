/**
 * 이터러블 Iterable이란?
 * 순회가 가능한, 이터레이션 프로토콜. Iteration Protocol
 * 반복 & 순회 + 규격 & 약속 & 인터페이스
 * for...of 나 spread 연산자.
 * Array String Map Set 관련된 기본적인 데이터 타입
 * 규격을 따른다는 것은 무슨 말일까?
 * 1. Iterable 프로토콜을 따라야 한다. [Symbol.iterator]를 호출하면 Iterator 프로토콜을 따르는 객체를 리턴해야됨
 * 2. Iterator 프로토콜을 따라야 한다.
 * {
 * [Symbol.iterator]():Iterator(반복자) 프로토콜
 *                      {
 *                          next(): 다음값
 *                       }
 * }
 * 순회가 가능한 오브젝트가 되려면, 어떤 객체든지 이 인터페이스를 따라야 한다.
 *
 */

// Iterable 하다는 건 순회가 가능하다는 것.
// [Symbolt.iterator](): Iterator;
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은 순회가능한 객체라는 걸 알 수 있음.
// 순회가 가능하면 무엇을 할 수 있지?
// for..of, spread 연산자를 사용할 수 있음.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (const item of array) {
}

//  일반 객체는 for..in 사용 가능, key를 출력.
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
}

const iterator = array.values();

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

//[Symbol.iterator](): Iterator{next(): {value, done}};
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터 반복자 만들기!

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}

// Iterator 함수로 만들기

function makeIterable(initaialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initaialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const calculate = makeIterable(0, 20, (n) => n * 3);
for (const num of calculate) {
  console.log(num);
}

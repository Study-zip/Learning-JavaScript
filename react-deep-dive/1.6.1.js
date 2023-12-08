// 1.6.1 구조 분해 할당
// 배열 구조 할당 (React에서 useState에서 사용)

// const array = [1, 2, 3, 4, 5];

// const [first, second, third, ...arrayRest] = array;

// first 1
// second 2
// third 3
// arrayRest [4, 5]

// const array = [1, 2, 3, 4, 5];

// const [first, , , , fifth] = array; // 2, 3, 4는 아무런 표현식이 없으므로 할당 생략

// first 1
// fifth 5

// const array = [1, 2];

// const [a = 10, b = 10, c = 10] = array;

// a 1
// b 2
// c 10

// const [a = 1, b = 1, c = 1, d = 1, e = 1] = [undefined, null, 0, ""];

// a 1
// b null
// c 0
// d ''
// e 1

// const array = [1, 2, 3, 4, 5];
// const [first, ...rest] = array;
// first 1
// rest [2, 3, 4, 5]

// var array = [1, 2, 3, 4, 5];
// var first = array[0],
//   second = array[1],
//   third = array[2],
//   arrayRest = array.slice(3);

// const object = {
//   c: 1,
//   d: 1,
//   e: 1,
// };

// const { a = 10, b = 10, c = 10, ...objectRest } = object;
// a 10
// b 10
// c 1
// objectRest = {d: 1, e: 1}

// function SampleComponent({ a, b }) {
//   return a + b;
// }

// SampleComponent({ a: 3, b: 5 }); // 8

// const key = "a";
// const object = {
//   a: 1,
//   b: 1,
// };

// const { [key]: a } = object;
// a = 1

// const object = {
//   a: 1,
//   b: 1,
//   c: 1,
//   d: 1,
//   e: 1,
// };

// const { a, b, ...rest } = object;

//after
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectwithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (lObject.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.index0f(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var object = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
  e: 1,
};

var a = object.a,
  b = object.a,
  rest = _objectWithoutProperties(object, ["a", "b"]);

// object literal { key: value }
// new object()
// object.create();
// key - 문자, 숫자, 문자열, 심볼 Symbol
// value - 원시값, 객체 (함수)

let profile = {
  name: 'nami',
  'default-mode': '😃', // 문자열 사용시 특수문자 사용 가능
  0: 1,
  ['study-mode']: '🤓',
};

profile.emoji = '🩵';

const obj = {
  name: 'nami',
  age: '27',
  hobby: 'watching movie',
};

// 코딩하는 시점에 정적으로 접근이 확정되는 방식.
obj.name;
obj.age;
console.log(obj);

// 동적으로 속성에 접근하고 싶을 때는 대괄호 표기법을 사용할 수 있다.
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'software engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, 'hobby');
console.log(obj);

const x = 0;
const y = 0;
const simple = { x, y }; // { x: x, y: y };
console.log(simple);

// 인수와 값이 같을 경우 객체 축약 형태를 사용할 수 있다.
// 객체 축약(Shorthand)

const id = 'John';
const num = 3022;

// 객체 축약 사용 전
// const person = {
//   id: id,
//   num: num,
// };

// 객체 축약 사용 후
const person = {
  id,
  num,
};
console.log(person);

function addObj(obj, sign) {
  return {
    obj,
    sign,
  };
}

const iphone = {
  name: 'iphone',
  display: function () {
    console.log(`${this.name}: 📱`);
  },
};
iphone.display();

// 공통된 특정한 템플릿을 만들어줄 수 있는 생성자 함수
// 생성자 함수
function User(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

const nami = new User('Nami', '🤓');
const james = new User('James', '🥸');

console.log(nami);
console.log(james);
console.log(nami.display);

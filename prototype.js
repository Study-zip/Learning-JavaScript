// const person1 = { name : '영미', emoji: '😲' };
// const person2 = { name : '하림', emoji: '🤩' };

function Person(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}
// 프로토타입 레벨의 함수
Person.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const person1 = new Person("영미", "😲");
const person2 = new Person("하림", "🤩");
console.log(person1, person2);
person1.printName();
person2.printName();

// 오버라이딩
// 인스턴스 레벨(자식)에서 동일한 이름으로 함수를 재정의하면 (오버라이딩)
// 프로토타입 레벨의 (부모) 함수의 프로퍼티는 가려진다. (섀도잉 된다)
person1.printName = function () {
  console.log("안녕");
};
person1.printName();

// 정적 레벨
Person.hello = () => {
  console.log("Hello!");
};
// person1.hello() 오류
Person.hello();
Person.MAX_AGE = 100;

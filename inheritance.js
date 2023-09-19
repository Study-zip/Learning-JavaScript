// 프로토타입 베이스로 한 객체지향 프로그래밍
function Person(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Person.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Girl(name, emoji, energy) {
  // super(name, emoji)
  Person.call(this, name, emoji);
  this.energy = energy;
}
// Girl.prototype = Object.create(Object.prototype);
Girl.prototype = Object.create(Person.prototype);

Girl.prototype.play = () => {
  console.log("숨바꼭질!");
};

function Boy(name, emoji) {
  Person.call(this, name, emoji);
}

Boy.prototype = Object.create(Person.prototype);
Boy.prototype.strength = () => {
  console.log("팔씨름!");
};

const girl1 = new Girl("윤지", "😳", 500);
girl1.play();
girl1.printName();
const boy1 = new Boy("철수", "😆");
boy1.strength();
boy1.printName();

// 상속도 확인하기
console.log(girl1 instanceof Girl);
console.log(girl1 instanceof Person);
console.log(girl1 instanceof Boy);
console.log(boy1 instanceof Girl);
console.log(boy1 instanceof Person);
console.log(boy1 instanceof Boy);

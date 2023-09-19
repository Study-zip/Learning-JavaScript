// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나.)
// 하지만 여러개의 함수들을 상속하고 싶다!
// Mixin

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Alien(name) {
  this.name = name;
}

Object.assign(Alien.prototype, play, sleep);
const alien = new Alien("왹왹");
console.log(alien);
alien.sleep();
alien.play();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger("어흥");
tiger.sleep();
tiger.play();

class Person {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Girl extends Person {
  play() {
    console.log("숨바꼭질!");
  }
}

class Boy extends Person {
  strength() {
    console.log("팔씨름!");
  }
}

const girl1 = new Girl("윤지", "😳");
girl1.play();
girl1.printName();
const boy1 = new Boy("철수", "😆");
boy1.strength();
boy1.printName();

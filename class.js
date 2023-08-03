/* 
클래스란? 객체를 생성할 수 있는 템플릿 (청사진, 틀)
객체지향 프로그래밍
생성자 함수 대신 많이 사용, Typescript도 클래스 기반.
프로토타입보다 많이 사용.
클래스를 통해 객체를 만들 수 있고, 이 객체를 클래스의 인스턴스라고 한다.

객체를 손쉽게 만들 수 있는 템플릿
1. 생성자 함수 (고전적 방법)
2. 클래스 🌟

*/

// 클래스 Class
class User {
  // 생성자 new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// nami는 User 클래스의 인스턴스이다.
const nami = new User('Nami', '🤓');
// james는 User 클래스의 인스턴스이다.
const james = new User('James', '🥸');

console.log(nami);
console.log(james);

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'sangsu' };

// static 정적 프로퍼티, 메서드
class newUser {
  static MAX_USERS = 10;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드 🔽
  static makeRandomUser() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new newUser('Cheolsu', '😎');
  }
  // 인스턴스 레벨의 메서드 🔽
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const cheolsu = newUser.makeRandomUser();
console.log(cheolsu);
console.log(newUser.MAX_USERS);
// 클래스 레벨의 함수는 클래스 이름으로 접근 가능하다.

Math.pow();
Number.isFinite(1);

// field
// 접근제어자 - 캡슐화
// private(#), public(default), protected
class Member {
  name;
  emoji;
  #type = '일반회원';
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const kdong = new Member('kdonge', '😛');
console.log(kdong);

// getter setter
// 접근자 프로퍼티 (Accessor Property)
class Mentee {
  constructor(fullName, course, mentor) {
    this.fullName = fullName;
    this.course = course;
    this.mentor = mentor;
  }
  get info() {
    return `${this.fullName} 님은 ${this.course} 과정, ${this.mentor} 멘토님과 매칭되었습니다.`;
  }
  set info(value) {
    console.log('set', value);
  }
}

const mentee = new Mentee('나미', '프론트엔드', '아네르스 하일스베르');
mentee.fullName = '남희';
console.log(mentee);
console.log(mentee.fullName);
console.log(mentee.info);
mentee.info = '성공';

// 확장, 상속
class Pokemon {
  constructor(action) {
    this.action = action;
  }
  attack() {
    console.log('필살기가 아직 없어.');
  }
  live() {
    console.log('디지몬 월드에서 살고있어.');
  }
}

class Agumon extends Pokemon {
  // 오버라이딩 overriding
  attack() {
    console.log('필살기 : 꼬마불꽃 🔥🔥🔥🔥🔥');
  }
  eat() {
    console.log('우걱우걱(アグアグ)');
  }
}
const agumon = new Agumon('코로몬에서 진화했어.');
console.log(agumon);
agumon.attack();
agumon.live();

class Coromon extends Pokemon {
  constructor(live, owner) {
    super(live);
    this.owner = owner;
  }
  // 오버라이딩 overriding
  attack() {
    console.log('필살기 : 거품 🫧🫧🫧🫧🫧🫧');
  }
  move() {
    console.log('데굴데굴(ころころ)');
  }
}

const coromon = new Coromon('깜몬에서 진화했어.', '태일이');
console.log(coromon);
coromon.attack();
coromon.live();

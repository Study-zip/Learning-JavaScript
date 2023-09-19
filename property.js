const alien = { name: "와우", emoji: "👽" };

console.log(Object.keys(alien));
console.log(Object.values(alien));
console.log(Object.entries(alien));

console.log("name" in alien);
console.log(alien.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(alien);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(alien, "name");
console.log(desc);

Object.defineProperty(alien, "name", {
  value: "메롱",
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(alien.name);
console.log(Object.keys(alien));

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "미정",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "나",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split("");
    },
    configurable: true,
  },
});
console.log(student);

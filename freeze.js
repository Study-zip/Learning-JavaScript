// 동결 Object.freeze 추가, 삭제, 쓰기, 속성 재정의 안됨!
// 단 얕은 꽁꽁 얼림이 된다. Shallow freeze

const nami = { name: "나미" };
const alien = { name: "외계인", emoji: "👽", vehicle: "🛸", friend: nami };
Object.freeze(alien);
alien.name = "왹왹";
console.log(alien);
nami.name = "Nami";
console.log(alien);

// 밀본! Object.seal 값의 수정은 가능, 추가와 삭제, 속성 재정의 안됨.
const ghost = { ...alien };
// Object.assign(ghost, alien);
Object.seal(ghost);
ghost.name = "유령";
ghost.emoji = "👻";
delete ghost.vehicle;
console.log(ghost);

console.log(Object.isFrozen(alien));
console.log(Object.isSealed(ghost));

// 확장 금지 preventExtensions
const conan = { name: "코난" };
Object.preventExtensions(conan);
console.log(Object.isExtensible(conan));
conan.text = "범인은 너야";
console.log(conan);
delete conan.name;
console.log(conan);

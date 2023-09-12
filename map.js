const map = new Map([
  ["key1", "👽"],
  ["key2", "📚"],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has("key1"));
console.log(map.has("key6"));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get("key1"));

// 추가
map.set("key3", "🍽️");
console.log(map);

// 삭제
map.delete("key3");
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 오브젝트와의 차이점?
const key = { name: "trevi", price: 1800 };
const lab = { name: "soso", price: 10, description: "안녕하세요" };
const obj = {
  [key]: lab,
};
console.log(obj);

const map2 = new Map([[key, lab]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));

// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

function removeDuplication(array) {
  return [...new Set(array)];
}

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}

console.log(findIntersection(set1, set2));

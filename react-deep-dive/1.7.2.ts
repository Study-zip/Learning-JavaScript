// function test(a: number, b: number) {
//   return a / b;
// }
// // Error
// // 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
// test('안녕하세요', '하이')

// function doSomething(callback: unknown){
//     if(typeof callback === 'function'){
//         callback()
//     }

//     throw new Error('callback은 함수여야합니다.')
// }

// type what1 = string & number;
// type what2 = ("hello" | "hi") & "react";

// // string이 키지만 값은 never다. 즉 어떠한 값도 올 수 없다.
// type Props = Record<string, never>;
// type State = {
//   counter: 0;
// };

// class SampleComponent extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }
//   render() {
//     return <>...</>;
//   }
// }

// export default function App() {
//   return (
//     <>
//       {/* OK */}
//       <SampleComponent />
//       {/* Type 'string' is not assignable to type 'never'*/}
//       <SampleComponent hello="world" />
//     </>
//   );
// }
// 클래스 정의
// class Animal {
//   sound: string;

//   constructor(sound: string) {
//     this.sound = sound;
//   }

//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }

// class Cat extends Animal {
//   meow() {
//     console.log("Meow!");
//   }
// }

// // 함수에서 instanceof 타입 가드 사용
// function handleAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.bark(); // Dog 클래스 특유의 메서드 사용 가능
//   } else if (animal instanceof Cat) {
//     animal.meow(); // Cat 클래스 특유의 메서드 사용 가능
//   }

//   // Animal 클래스 공통 메서드 사용
//   animal.makeSound();
// }

// // 예시
// const myDog = new Dog("Dog sound");
// const myCat = new Cat("Cat sound");

// handleAnimal(myDog); // Dog 특유의 메서드와 Animal 공통 메서드 사용
// handleAnimal(myCat); // Cat 특유의 메서드와 Animal 공통 메서드 사용

// function logging(value: string | undefined) {
//   if (typeof value === "string") {
//     console.log(value);
//   }
//   if (typeof value === "undefined") {
//     // nothing to do
//     return
//   }
// }

// interface Student {
//   age: number;
//   score: number;
// }

// interface Teacher {
//   name: string;
// }

// function doSchool(person: Student | Teacher) {
//   if ("age" in person) {
//     person.age; // person은 Student
//     person.score;
//   }
//   if ("name" in person) {
//     person.name; // person은 Teacher
//   }
// }

// function getfirstAndLast<T>(list: T[]): [T, T] {
//   return [list[0], list[list.length - 1]];
// }
// const [first, last] = getfirstAndLast([1, 2, 3, 4, 5]);
//  first // number
//  last // number

// const [first, last] = getfirstAndLast(["a", "b", "c", "d", "e"]);
//  first // string
//  last //string

// React에서 제네릭을 사용할 수 있는 코드를 떠올린다면 useState가 가장 먼저 떠오른다.
// function Component() {
//   // state: string
//   const [state, setState] = useState<string>("");
//   // ...
// }

// function multipleGeneric<First, Last>(a1: First, a2: Last): [First, Last] {
//   return [a1, a2];
// }
// const [a, b] = multipleGeneric<string, boolean>("true", true);

// type Hello = {
//   [key: string]: string;
// };

// const hello: Hello = {
//   hello: "hello",
//   hi: "hi",
// };

// hello["hi"]; // hi
// hello["안녕"]; // undefined

// // record 사용
// type Hello = Record<"hello" | "hi", string>;

// const hello: Hello = {
//   hello: "hello",
//   hi: "hi",
// };

// // 타입을 이용한 인덱스 시그니처
// type Hello = { [key in "hello" | "hi"]: string };
// const hello: Hello = {
//   hello: "hello",
//   hi: "hi",
// };

// (Object.keys(hello) as Array<keyof Hello>).map((key) => {
//   const value = hello[key];
//   return value;
// });

// // 타입 가드 함수를 만드는 방법
// function keysOf<T extends Object>(obj: T): Array<keyof T> {
//   return Array.from(Object.keys(obj)) as Array<keyof T>;
// }

// keysOf(Hello).map((key) => {
//   const value = hello[key];
//   return value;
// });

// 가져온 key 단언하는 방법
// Object.keys(hello).map((key) => {
//   const value = hello[key as keyof Hello];
//   return value;
// });

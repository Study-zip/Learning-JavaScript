// 클로저 Clousers 폐쇄, 닫히는 느낌. - 내부 함수에서 외부 함수에 있는 상태에 접근 할 수 있는 것

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}

const func1 = outer();
func1();

// 중첩된 함수에서 내부에 있는 함수와 외부에 있는 함수의 상태가 외부에 함께 묶여 있어서 내부에서 외부 데이터에 접근할 수 있는 것!

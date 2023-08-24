/**
 * Generator 생성기
 */

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return
multiple.thow("Error!");

next = multiple.next();
console.log(next.value, next.done);

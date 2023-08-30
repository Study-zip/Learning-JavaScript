function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}

execute();

// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러

function callback() {
  console.log(`Hello`);
}

function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback함수를 전달 해야함.");
  }
  if (!seconds || seconds < 0) {
    throw new Error("Seconds는 0보다 커야함");
  } else {
    setTimeout(callback, seconds * 1000);
  }
}

try {
  runInDelay(callback, 1);
} catch (error) {}

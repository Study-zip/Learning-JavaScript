function getGhost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👻");
    }, 1000);
  });
}

function getAilen() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👽");
    }, 3000);
  });
}

function getDevil() {
  return Promise.reject(new Error("No devil.. 👿"));
}

getGhost() //
  .then((ghost) =>
    getAilen() //
      .then((alien) => [ghost, alien])
  )
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise들을 실행하기
Promise.all([getGhost(), getAilen()]) //
  .then((scared) => console.log("this is all", scared));

// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김.
Promise.race([getGhost(), getAilen()]) //
  .then((scary) => console.log("this is winner", scary));

Promise.all([getGhost(), getAilen(), getDevil()])
  .then((error) => console.log("all-error", error))
  .catch(console.log);

Promise.allSettled([getGhost(), getAilen(), getDevil()]) //
  .then((error) => console.log("all-settled", error))
  .catch(console.log);

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

//유령이랑 외계인 같이 갖고 오기

function fetchCreepy() {
  return getGhost() //
    .then((ghost) =>
      getAilen() //
        .then((ailen) => [ghost, ailen])
    );
}

fetchCreepy() //
  .then((creepy) => console.log(creepy));

// async로 바꾸기
async function fetchCreepy() {
  const ghost = await getGhost();
  const ailen = await getAilen();
  return [ghost, ailen];
}

fetchCreepy() //
  .then((creepy) => console.log(creepy));

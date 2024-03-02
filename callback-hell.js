// call back hell
getImage("./images/1.jpg", (image, err) => {
  if (err) throw new Error(err);
  compressImage(image, (compressedImage, err) => {
    if (err) throw new Error(err);
    applyFilter(compressedImage, (filteredImage, err) => {
      if (err) throw new Error(err);
      saveImage(compressedImage, (res, err) => {
        if (err) throw new Error(err);
        console.log("Image saved successfully");
      });
    });
  });
});

// Promise
function getImage(file) {
  return new Promise((res, rej) => {
    try {
      const data = readFile(file);
      res(data);
    } catch (err) {
      rej(new Error(err));
    }
  });
}

getImage(file)
  .then((image) => console.log(image))
  .catch((err) => console.log(err))
  .finally(() => console.log("done"));

Promise.resolve(1).then("YaY!");
Promise.reject(1).catch((err) => console.log(err));

getImage("./images/1.jpg")
  .then((image) => compressImage(image))
  .then((compressedImage) => applyFilter(compressedImage))
  .then((filteredImage) => saveImage(compressedImage))
  .then((res) => console.log("Image saved successfully"))
  .catch((err) => console.log(err));

// Async/Await
// example
async function greet() {
  return "Hello";
}


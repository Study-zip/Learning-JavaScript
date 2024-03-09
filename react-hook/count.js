document.addEventListener("DOMContentLoaded", () => {
  let count = 0; // 초깃값

  const countDisplay = document.getElementById("count"); // Count 표시
  const incrementButton = document.getElementById("increment"); // 증가 버튼
  const decrementButton = document.getElementById("decrement"); // 감소 버튼

  // Count 표시 업데이트
  function updateCount(newCount) {
    count = newCount;
    countDisplay.innerText = count;
  }

  // 증가 버튼 클릭
  incrementButton.addEventListener("click", () => {
    updateCount(count + 1);
  });

  // 감소 버튼 클릭
  decrementButton.addEventListener("click", () => {
    updateCount(count - 1);
  });
});

// 실행 컨텍스트 Execution Context
// 코드의 실행 순서와 스코프를 기억!
const a = 1;
{
  const a = 2;
  {
    const a = 3;
  }
}

// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입
// number 원시타입을 감싸고 있는 Number 객체로 감싸진다.
console.log(number.toString());
console.log(number); // number 원시타입

const text1 = "text";
console.log(text1);
text1.length; //  String 객체
text1.trim();

// `.`으로 내장객체를 부를 수 있었다.

console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// F11을 눌러서 콘솔에 globalThis, this 등으로 전역 객체임을 확인할 수 있다.
// 값으로 평가해서 출력
eval("const num = 2; console.log(num)");
// 유한한지 아닌지 확인하는 것
console.log(isFinite(1));
console.log(isFinite(Infinity));
//문자열인데 숫자라면 숫자로 만들어줌
console.log(parseFloat("12.345346"));
// 문자열 숫자를 정수로 만들어줌
console.log(parseInt("12.345346"));

// URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = "www.남희정.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 이용한다.
const part = "남희정.com";
console.log(encodeURIComponent(part));

// Boolean
const isTrue = true; // new Boolean(true);
console.log(isTrue.valueOf());

/**
 * Falsy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'true'
 * 'false'
 * []
 * {}
 */

const num1 = 123;
const num2 = new Number(124);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

// 지수 표기법 (매우 크거나 적은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 1020000000000000000;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1212414.325425235;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));

//0과 1사이에서 나타낼 수 있는 가장 작은 숫자
console.log(Number.EPSILON);
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}
const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));

// 수학 관련 함수들 Math
// Math
// static properties, method
console.log(Math.E); // 오릴러의 상수, 자연로그의 밑
console.log(Math.PI); // 원주율 PI 값
// static method
// 절대값
console.log(Math.abs(-10));
// 소수점 이하를 올림
console.log(Math.ceil(1.4));
// 소수점 이하를 내림
console.log(Math.floor(1.4));
// 소수점 이하를 반올림
console.log(Math.round(1.7));
// 정수만 반환
console.log(Math.trunc(1.5432));
// 최대, 최소값을 찾기
console.log(Math.max(1, 3, 4));
console.log(Math.min(1, 3, 4));
// 거듭제곱
console.log(3 ** 2);
console.log(Math.pow(3, 2));
// 제곱근
console.log(Math.sqrt(9));
// 랜덤한 값을 반환 (0 ~ 1)
console.log(Math.random());
// 1~10
console.log(Math.floor(Math.random() * 10 + 1));

// 문자열 함수들
// String

const textObj = new String("Hello World!");
const text = "Hello World!";

console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("tx"));
console.log(text.includes("H"));

console.log(text.startsWith("He"));
console.log(text.endsWith("!"));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 5));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = "            space              ";
console.log(space.trim());

const longText = "Get to the point";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
console.log(longText.split(", ", 2));

// Date 날짜
// 생성할 수 있는 방법 static(클래스 이름만으로 만들 수 있는 것),
// 객체를 만들어서 instance 레벨에서 생성하는 것

// 현재 시간
// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date("Feb 17, 2023"));
console.log(new Date("2024-02-16T14:59:00"));

console.log(Date.now());
console.log(Date.parse("1996-02-16T14:59:00"));

const now = new Date();
now.setFullYear(2023);
now.setMonth(7); //   0: 1월
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); // 0 일요일

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString("ko-KR"));

const options = { timeZone: "America/New_York" };
console.log(now.toLocaleString("en-US", options));

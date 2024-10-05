// 함수 타입 표현식

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b; //타입 별칭 없이도 사용 가능
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처(콜 시그니처)

type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입
};
const add2: Operation2 = (a, b) => a + b; //타입 별칭 없이도 사용 가능
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name; // 하이브리드 타입 : 객체로도 쓰고 함수로도 쓸 수 있음

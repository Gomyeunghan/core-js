/* ---------------------------------- */
/*              example;              */
/* ---------------------------------- */
let name = 'Ilya';
console.log(`hello ${1}`); // 'hello 1'
console.log(`hello ${'name'}`); // 'hello name'
console.log(`hello ${name}`); // hello ilya
/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let money = null;
let friend;

// 2. 값이 할당되지 않은 상태

let macbook;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const ourPlanet = '지구';
const Mars = '화성';
const SUN = `태양`;
// 4. 정수, 부동 소수점 숫자(길이 제약)
let width = 1.25;
let height = 10;

let big = 10n;
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let Big = BigInt(10);

// 6. 참(true, yes) 또는 거짓(false, no)
let num = 10 > 1;
let ai = 0 > 1;

let javascriptIsHard = true;
let javascriptIsEasy = Boolean(0);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let refrigerator = {
  fruit: 'apple',
  taest: 'it is good',
};

// 8. 고유한 식별자(unique identifier)

const key = Symbol('masterKey');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

console.log(typeof refrigerator);

// 2) 함수 typeof()
console.log(typeof ai);
// 언어 상, 오류

console.log(typeof null);

// Object
console.log(typeof refrigerator);
// Array
let arr = [1, 2, 3, 4];

console.log(typeof arr);
// function

function sum(x, y) {
  return x + y;
}

console.log(typeof sum);

// this

let obj = {
  calc: function () {
    console.log(this);
  },
};
obj.calc();

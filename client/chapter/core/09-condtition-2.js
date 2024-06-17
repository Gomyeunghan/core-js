/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log('AandB', AandB);

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB : ', AorB);

// 논리합 할당 연산자 Logical OR Assignment
// a ||= b

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

// 로그인 구현

function login() {
  let userName = prompt('누구?', '');

  if (userName == null || undefined) return;

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('마..마스터?..', '');
    if (password.toLowerCase === 'themaster') {
      alert('환영합니다.');
    } else if (password.replace(/\s*/g, '') === '' || password === null) {
      alert('인증에실패하였습니다.');
    } else {
      alert('마스터가 아니군요');
    }
  } else if (userName.replace(/\s*/g, '') === '' || userName === null) {
    alert('취소되었습니다');
  } else {
    alert('그런사람 없습니다.');
  }
}
login();

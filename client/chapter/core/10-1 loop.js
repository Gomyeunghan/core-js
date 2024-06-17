/* --------------- */
/* While Loop      */
/* --------------- */

// const frontEndDev = [
//   'HTML',
//   'CSS',
//   'SVG',
//   'JavaScript',
//   'jQuery',
//   'React',
//   'Redux',
// ];

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   ++i;
// }

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// let i = 0;

// while (i < frontEndDev.length) {
//   // let value = frontEndDev[i];
//   // i++;
//   // console.log(value);
// }

// while 문 (역순환 : 역방향)
// let l = frontEndDev.length - 1;

// while (l >= 0) {
//   let value = frontEndDev[l];
//   console.log(value);
//   l--;
// }
// 성능 진단 : 순환 vs. 역순환

//do while 문

// let result = prompt('몇번');

// do {
//   console.log(result);

//   if (result < 0) {
//     break;
//   }

//   result--;
// } while (result);

// let first = document.querySelector('.first');

// function next(n) {
//   do {
//     n = n.nextSibling;
//   } while (n.nodeType !== 1);

//   return n;
// }

// let second = next(first);

// function prev(node) {
//   if (typeof node === 'string') {
//     node = document.querySelector(node);
//   }

//   do {
//     node = node.previousSibling;
//   } while (node.nodeType !== 1);

//   return node;
// }

// const previous = prev(second);
/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// let j = 0;
// while (j <= 10) {
//   j++;
//   if (j % 2 !== 0) {
//     continue;
//   }
//   console.log(j);
// }

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

for (let i = 0; i < frontEndDev.length; i++) {
  let value = frontEndDev[i];
  let lower = value.toLocaleLowerCase();
  // if (lower.includes('svg') || lower.includes('jquery')) {
  //   continue;
  // }
  if (lower.includes('jquery')) {
    break;
  }
  // console.log(frontEndDev[i]);
}

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

for (let i = 0; i < l; i++) {
  let arr = [...frontEndDev];
  console.log(arr.pop());
}

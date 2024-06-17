/* ---------------- */
/* Condition        */
/* ---------------- */

// function watchingMovie() {
//   // 그 영화 봤니?
//   //     ↓
//   // Yes | No
//   //     | 영화 볼거니?
//   //           ↓
//   //       Yes | No

//   // 영화 봤니?
//   let didWatchMovie = confirm('그 영화 봤니?');

//   if (didWatchMovie == true) {
//     console.log('놀줄아는놈이구나');
//   } else {
//     let goingToWatchMovie = confirm('영화볼꺼니?');

//     if (goingToWatchMovie == true) {
//       let withWho = prompt('누구랑 볼꺼니?');

//       if (withWho == 'you') {
//         console.log('good');
//       } else {
//         console.log('왜나랑안봐?');
//       }
//     } else {
//       console.log('ㅗ');
//     }
//   }
// }
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const message = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까? 재밌겠다'
    : '그래..';

// let didWatchMovie = prompt('그영화봤니?', '');
// let goingToWatchMovie = prompt('그영화 볼꺼니?', '');

// let movie = didWatchMovie.includes('yes')
//   ? '그영화 잼더라'
//   : goingToWatchMovie.includes('yes')
//     ? console.log('잼겠다')
//     : console.log('꺼져');

// 영화 볼거니?

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}
// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

// let user = prompt('자바스크립트의 공식 이름은 무엇일 까요?', '');

// if (user == 'ECMAScript') {
//   alert('정답입니다.');
// } else {
//   alert('오답입니다.');
// }

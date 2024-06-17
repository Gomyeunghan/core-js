/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
console.log(immutableChangeCharacter);
// 부분 문자열 추출
let slice = message.slice(5, -1);
console.log(slice);
let subString = message.substring(2, 5); //음수안됨
console.log(subString);
// let subStr = message.subStr;

// 문자열 포함 여부 확인
let indexOf = message.indexOf('Less');
console.log(indexOf);

function checkBrowser() {
  const userBrowser = window.navigator.userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case userBrowser.indexOf('edg') > -1:
      browserName = 'Ms Edge';
      break;
    case userBrowser.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'chrome';
      break;
    case userBrowser.indexOf('safari') > -1:
      browserName = 'safari';
      break;
    case userBrowser.indexOf('firefox') > -1:
      browserName = 'firefox';
      break;
    case userBrowser.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '인터넷을 쓰긴 하시나요?';
  }
  return browserName;
}
checkBrowser(); // chrome

let lastIndexOf;
message.lastIndexOf('s');

console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('less');
console.log(includes);

let startsWith = message.startsWith('Less');

console.log(startsWith);

let endsWith = message.endsWith('.');
console.log(endsWith);

let str =
  '               a         b            c                 d                 ';
// 공백 잘라내기
let trimStrt = str.trimStart();
console.log(trimStrt);
let trimEnd = str.trimEnd();
console.log(trimEnd);
let trim = str.trim();
console.log(trim);

//중간공간

const replaceALl = str.replaceAll(' ', '');
console.log(replaceALl);

const replace = str.replace(/\s*/g, '');
console.log(replace);

function trimText(params) {
  const replaceALls = params.replaceALl(' ', '');
  return replaceALls;
}
// const trimText = (string) => string.replace(/\s*/g,'');

// trimText(str) // abcd

// 텍스트 반복
let repeat = message.repeat();

console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
console.log(toLowerCase);

let toUpperCase = message.toUpperCase();
console.log(toUpperCase);
console.clear();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

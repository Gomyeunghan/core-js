/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000, 5000, 2500].forEach(function () {});

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 변수
  let total = 0;

  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);

  // arguments => array

  const arr = [...arguments];
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);

  // console.log( arr );

  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)

  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // const result = arr.reduce((acc,cur) => acc + cur,0)

  // return arr.reduce((acc,cur) => acc + cur,0)

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item
  // })

  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype;

  // console.log(arguments);

  return total;
};

// let calculateTotal2 = (arr) => arr.reduce((acc,cur) => acc + cur,0)

const result = calculateTotal(1000, 5000, 2500, 4000, 2300);

// console.log( result );

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {};

cb(
  false,
  function () {
    console.log('성공입니다.');
  },
  function () {
    console.log('실패입니다.');
  }
);

function movePage(url, success, fail) {
  if (url === 'https://www.naver.com') {
    success(url);
  } else fail();
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(
      `정확한 ${url}을 입력했습니다. 잘했습니다. 하지만 요즘 네이버 보다는 구글이죠`
    );
    // location.href = url;
  },
  function () {
    console.log('구글이 최고죠?');
  }
);
// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

const people = [
  {
    nickName: 'tiger',
    age: 40,
  },
  {
    nickName: 'beom',
    age: 45,
  },
  {
    nickName: 'seon',
    age: 20,
  },
];

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`;
}, '');

// document.body.insertAdjacentHTML('beforeend',template)

//forEach 배열을 순환함 반복문 이라 값을 반환하지 않음.
//reduce => 값을 반환 함 반환 값의 형태는 숫자/문자/배열/객체/뭐테그/ 암거나 다 될수있음
//map => 배열을 순환하고 값을 반환함. 값을 반환하지만 반환된 값은 배열밖에 안됨
//filtter => 배열 순환 값 반환 하지만 필터 또한 배열로 된 값만 반환함.

const arr = [10, 100, 1000];

const mapValue = arr.map(function (item) {
  return item * 2;
});
console.log(mapValue);

const MASTER = (function () {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

console.clear();

function Character(userName, level) {
  (this.userName = userName), (this.level = level * 2);
}

function Circle(radius) {
  (this.radius = radius),
    (this.getDiameter = function () {
      return 2 * this.radius;
    });
  this.diameter = this.getDiameter();
}

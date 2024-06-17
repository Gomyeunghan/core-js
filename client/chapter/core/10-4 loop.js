/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    console.log('하이');
  },
};

// console.log('valueOf' in javaScript);
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty('creator'));

Object.prototype.nickName = '호랑이';
// console.log(Object.prototype.hasOwnProperty(javaScript, 'nickName'));
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {
  // console.log(key);
}

const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  console.log(tens[key]);
}

// for in 문은 객체를 순환할때만 사용하자
//배열은 순서가 중요한 객체이므로 for In 문을 사용하면 순서 보장이 안될 뿐더러 성능또한 저하된다.

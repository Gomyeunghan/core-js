/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;

console.log(typeof (days + ''));

let friedns;
console.log(typeof (friedns + ''));

// boolean

let isCLicked = true;

console.log(typeof String(isCLicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(typeof friend * 1);

// null

let money = null;

console.log(Number(money));

// boolean

let isMarried = false;

console.log(Number(isMarried));

// string

let num = '100';

console.log(typeof (num * 1));

// numeric string

const width = '120.5px';

console.log(parseInt(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(' '));

// 위에 나열한 것 이외의 것들

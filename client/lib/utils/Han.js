import { insertLast } from '../dom/insert.js';

// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// const tiger = async (url) => {
//   const response = await fetch(url);

//   if (response.ok) {
//     response.data = await response.json();
//   }

//   return response.data;
// };

// console.log(tiger(ENDPOINT));

// const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// // fetch  => promise
// const joowon = async (url, method, body) => {

//   // fetch함수를 실행하면 Promise객체 반환
//   // -> 그 Promise 객체에서  await를 통해 PromiseResult를 받아옴
//   // (Response라는 내장 클래스의 인스턴스(객체))
//   // 해당 Response 인스턴스에 '스트림'이라는 형태로 본문(우리가 원하는 데이터)를 가지고 있지만 접근 불가
//   // -> 할당
//   const response = await fetch(url);
//   console.log(response);

//   // response(Response 인스턴스)의 ok프로퍼티가 true인지 확인
//   // true이면 정상적으로 받은 것
//   if (response.ok) {
//     // 직접 접근할 수 없는 본문(문자)을 .json() 메서드를 통해 접근 및 JS객체로 파싱(변환)
//     // 이 메서드도 비동기적으로 처리되고, Promise 객체를 반환함. (본문을 끝까지 읽고 파싱하는데 시간이 걸림)
//     // await를 붙이면 기다렸다가 반환된 Promise 객체의 PromiseResult(본문, 즉 우리가 원하는 데이터)를 꺼냄.
//     // -> 할당
//     const data = await response.json();
//     return data;
//   }
// };

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// fetch  => promise

const defaultOption = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (option) => {
  const { url, ...restOption } = {
    ...defaultOption,
    ...option,
    headers: { ...defaultOption.headers, ...option.headers },
  };

  const response = await fetch(url, { ...restOption });

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

// IIAFE

// (async function(){

// })()
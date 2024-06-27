import { isString } from './type.js';

export function f() {
  console.log('storage');
}

const { localStorage: storage } = window;

// const data = JSON.parse(localStorage.getItem('user', JSON.stringify(user)));

// console.log(data);

export function setStorage(key, value) {
  storage.setItem(key, JSON.stringify(value));

  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
    } else {
      reject();
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve) => {
    !key ? storage.clear : storage.removeItem(key);
    resolve();
  });
}

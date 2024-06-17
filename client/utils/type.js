const typeOf = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

const isObject = (data) => typeOf(data) === 'object';
const isArray = (data) => typeOf(data) === 'array';
const isnull = (data) => typeOf(data) === 'null';
const isNumber = (data) => typeOf(data) === 'number';
const isSymbol = (data) => typeOf(data) === 'symbol';
const isBigInt = (data) => typeOf(data) === 'bigint';
const isFunction = (data) => typeOf(data) === 'function';
const isMath = (data) => typeOf(data) === 'math';
const isString = (data) => typeOf(data) === 'string';
const isUndefined = (data) => typeOf(data) === 'undefined';

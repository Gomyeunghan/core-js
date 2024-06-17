function earth() {
  let water = true;
  let gravity = 10;

  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

function state(init) {
  let value = init;

  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const result = state(10);

const getter = result[0];
const setter = result[1];

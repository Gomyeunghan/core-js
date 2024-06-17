function User(name) {
  (this.name = name), (this.nickName = name + '바보');
  this.fool = function (name) {
    console.log(name + '멍청이');
  };
  User.prototype.sayhi = function () {
    console.log('hello');
  };
}

const newUser = new User('han');

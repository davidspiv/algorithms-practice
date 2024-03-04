Array.prototype.myMap = function (cb) {
  const updatedArr = [];
  for (let i = 0; i < this.length; i++) {
    updatedArr.push(cb(this[i]));
  }
  return updatedArr;
};
myArr = [1, 4, 7, 3, 8, 45, 6, 3, 2, 5, 34, 0];
console.log(myArr.myMap((x) => x * 5));

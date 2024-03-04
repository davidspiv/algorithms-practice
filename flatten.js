Array.prototype.flatten = function () {
  const flattenArr = [];
  let rec = (arr) => {
    for (let el of arr) {
      if (Array.isArray(el)) {
        rec(el);
      } else {
        flattenArr.push(el);
      }
    }
  };
  rec(this);
  return flattenArr;
};

const arr = [
  "sdf",
  "gdh",
  "as",
  "dgh",
  [3.6, 42, { class: "YYYYYYY" }, 7, [22, 22, 22, 22], 1, 9],
  "sdfs",
  "sdfsdf",
  "sdfsdf",
  "sd",
];
console.log(arr.flatten(arr));

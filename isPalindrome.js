String.prototype.isPalindrome = function () {
  for (let i = 0; i < Math.floor(this.length / 2) + 1; i++) {
    if (this[i] != this[this.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
word = "abbaabba";
console.log(word.isPalindrome());

module.exports = function reverse (n) {
   if (n < 0) {
      n = Math.abs(n);
    }
    if (n%10 === 0) {
      n = n/10;
    }
    let newNumber = Number(String(n).split('').reverse().join(''));
    return newNumber;  
}

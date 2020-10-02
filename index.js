function isOdd(num) {
  return num % 2 !== 0;
}

function isPrime(num) {
  if (num === 1 || num % 2 == 0) return false;
  for (let i = 3; i < Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPerfectSquare(num) {
  let $sqrt = Math.sqrt(num);
  return $sqrt === Math.floor($sqrt);
}

function isPerfectCube(num) {
  let $cbrt = Math.cbrt(num);
  return $cbrt === Math.floor($cbrt);
}

function isArmstrong(num) {
  let strNum = num.toString(),
    temp = num,
    sum = 0;
  while (temp > 0) {
    sum += Math.pow(temp % 10, strNum.length);
    temp = Math.floor(temp/10);
  }
  return sum === num;
}

function isPalindrome(num) {
  let str = num.toString(),
    len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
}

function isThreeOrFiveFactor(num) {
  return num % 3 === 0 || num % 5 === 0;
}
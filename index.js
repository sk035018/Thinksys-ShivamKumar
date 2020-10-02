// Ques 1.
function arrayOdd(arr) {
  return arr.filter(el => el % 2 !== 0);
}

// Ques 2.
function arrayEven(arr) {
  return arr.filter(isEven);
}

// Ques 3.
function arrayPrime(arr) {
  return arr.filter(isPrime);
}

// Ques 4.
function arrayPerfectSquares(arr) {
  return arr.filter(isPerfectSquare);
}

// Ques 5.
function arrayPerfectCubes(arr) {
  return arr.filter(isPerfectCube);
}

// Ques 6.
function arrayArmstrong(arr) {
  return arr.filter(isArmstrong);
}

// Ques 7.
function arrayPalindrome(arr) {
  return arr.filter(isPalindrome);
}

// Ques 8.
function arrayEvenSqure(arr) {
  return arr.filter(isEven);
}

// Ques 9.
function arrayPositive(arr) {
  return arr.filter(el => el >= 0);
}

// Ques 10.
function arrayFactorOf3Or5(arr) {
  return arr.filter(isThreeOrFiveFactor);
}

function isEven(num) {
  return num % 2 === 0;
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
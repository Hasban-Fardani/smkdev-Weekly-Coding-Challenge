function checkPrime(num){
  if (num == 2) {
    return true;
  }

  if (num > 2) {
    for (let n = 2; n < n; n++) {
      if (num % n === 0) {
        return false
      }    
    }
    return true;
  }
  return false;
}

function getPrimeRange(start, end) {
  for (let n = start; n <= end; n++) {
    if (checkPrime(n)){
      console.log(n);
    }
  }
}
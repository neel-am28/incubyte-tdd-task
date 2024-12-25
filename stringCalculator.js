function add(numbers) {
  if (numbers.trim() == "") {
    return 0
  }

  const numbersArray = numbers.split(/[\n,]/).map((num) => Number(num))
  if (numbersArray.length == 1) {
    return numbersArray[0]
  } else if (numbersArray.length == 2) {
    return numbersArray[0] + numbersArray[1]
  } else {
    const sum = numbersArray.reduce((acc, item) => acc + item, 0)
    return sum
  }
}

module.exports = {add}

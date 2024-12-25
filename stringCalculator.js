function add(numbers) {
  if (numbers.trim() == "") {
    return 0
  }

  const numbersArray = numbers.split(",").map((num) => Number(num))
  if (numbersArray.length == 1) {
    return numbersArray[0]
  } else if (numbersArray.length == 2) {
    return numbersArray[0] + numbersArray[1]
  }
}

module.exports = {add}

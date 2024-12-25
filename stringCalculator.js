function add(numbers) {
  if (numbers.trim() == "") {
    return 0
  }

  const numbersArray = numbers.split(",").map((num) => Number(num))
  if (numbersArray.length == 1) {
    return numbersArray[0]
  }
}

module.exports = {add}

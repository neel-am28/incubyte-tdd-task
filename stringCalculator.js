function add(numbers) {
  if (numbers.trim() == "") {
    return 0
  }

  if (numbers.startsWith("//")) {
    const delimiterString = numbers.split("\n")[0].slice(2)
    const numbersArray = numbers
      .split("\n")[1] // Get the numbers part
      .split(delimiterString) // Split by custom delimiter
      .map((num) => Number(num)) // Convert to numbers

    return numbersArray.reduce((acc, item) => acc + item, 0)
  } else {
    // Handle case for default delimiter (comma)
    const numbersArray = numbers.split(/[\n,]/).map((num) => Number(num))

    return numbersArray.reduce((acc, item) => acc + item, 0)
  }
}

module.exports = {add}

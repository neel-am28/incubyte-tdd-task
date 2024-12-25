const {add} = require("./stringCalculator")

describe("string calculator", () => {
  it("should return 0 if empty string is passed", () => {
    expect(add("")).toBe(0)
  })

  it("should return the first number if string length is one", () => {
    expect(add("1")).toBe(1)
  })

  it("should return sum of first two numbers if string length is two", () => {
    expect(add("1,5")).toBe(6)
  })

  it("should return sum of all numbers inside the string", () => {
    expect(add("1,2,5")).toBe(8)
  })

  it("should return sum of all numbers inside the string separated by new line or a commma", () => {
    expect(add("1\n2,3")).toBe(6)
  })

  it("should return sum of all numbers inside the string separated by new line and custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3)
  })
})

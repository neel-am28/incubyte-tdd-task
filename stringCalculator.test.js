const {add} = require("./stringCalculator")

describe("string calculator", () => {
  it("should return 0 if empty string is passed", () => {
    expect(add("")).toBe(0)
  })

  it("should return the first number if string length is one", () => {
    expect(add("1")).toBe(1)
  })
})

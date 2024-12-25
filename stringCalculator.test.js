const {add} = require("./stringCalculator")

describe("string calculator", () => {
  it("should return 0 if empty string is passed", () => {
    expect(add("")).toBe(0)
  })
})

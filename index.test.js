const index = require("./index")

describe("node", () => {

describe("count_list", () => {

  test("empty",  () => expect(index.count_list([])).toBe(0))
  test("single", () => expect(index.count_list([42])).toBe(1))
  test("double", () => expect(index.count_list([634,333])).toBe(2))

})

})

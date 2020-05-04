const index = require("./index")

describe("index", () => {

  describe("count_list", () => {

    test("empty", () => {
      expect(index.count_list([])).toBe(0)
    })

  })

})

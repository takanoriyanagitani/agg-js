const {
  Builder,
  By,
} = require("selenium-webdriver")

const chrome = require("selenium-webdriver/chrome")

require("chromedriver")

const opt = new chrome.Options()

const copt = opt.headless()

describe("d1", () => {

  const state = {
    browser: null,
  }

  beforeAll(() => Promise.resolve(new Builder())
    .then(b => b.forBrowser("chrome"))
    .then(b => b.setChromeOptions(copt))
    .then(b => b.build())
    .then(b => Object.assign(state, {browser: b}))
    .then(s => s.browser)
    .then(b => b.get("https://takanoriyanagitani.github.io/agg-js/docs/tests/index/count_list/index.html"))
  , 16384)

  afterAll(() => Promise.resolve(state.browser)
    .then(b => b.quit())
  , 16384)

  test("t1", () => {
    return Promise.resolve(state.browser)
    .then(b => b.getTitle())
    .then(t => JSON.parse(t))
    .then(result => {
      const {
	total,
	ok,
	ng,
      } = result
      expect(total).toBe(ok)
    })
  }, 16384)

})

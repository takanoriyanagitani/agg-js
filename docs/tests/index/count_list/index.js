(function(test){

  const count_list = window.JsAgg.count_list

  const build_td = function(content){
    const td = document.createElement("td")
    td.textContent = content
    return td
  }

  [
    ["empty",  0, []],
    ["single", 1, [42]],
    ["double", 2, [634, 333]],
  ].forEach(function(dei){
    const description = dei[0]
    const expected    = dei[1]
    const input       = dei[2]
    const output      = count_list(input)

    const tr = document.createElement("tr")
    tr.appendChild(build_td(description))
    tr.appendChild(build_td(input))
    tr.appendChild(build_td(output))
    tr.appendChild(build_td(expected))
    tr.appendChild(build_td(input === output ? "OK" : "NG"))

    test.appendChild(tr)
  })

})(document.getElementById("test"))

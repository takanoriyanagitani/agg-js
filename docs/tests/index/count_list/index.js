(function(test){

  const count_list = window.JsAgg.count_list

  const build_td = function(content){
    const td = document.createElement("td")
    td.textContent = content
    return td
  }

  [
    {e:0, d: "empty",  i: []},
    {e:1, d: "single", i: [42]},
    {e:2, d: "double", i: [634,333]},
  ].forEach(function(dei){
    dei.o = count_list(dei.i)

    const tr = document.createElement("tr")

    tr.appendChild(build_td(dei.d))
    tr.appendChild(build_td(dei.i))
    tr.appendChild(build_td(dei.o))
    tr.appendChild(build_td(dei.e))
    tr.appendChild(build_td(dei.o === dei.e ? "OK" : "NG"))

    test.appendChild(tr)
  })

})(document.getElementById("test"))

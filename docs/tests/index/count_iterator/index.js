(function(test){

  const count_iterator = window.JsAgg.count_iterator

  const build_td = function(content){
    const td = document.createElement("td")
    td.textContent = content
    return td
  }

  const l2i_browser = function(l){ return l[Symbol.iterator]() }

  const l2i_ie11 = function(l){
    return {
      next: function(){
	const v = l.pop()
	const d = undefined === v
	return d ? { done: d } : { done: d, value: v }
      },
    }
  }

  const l2i = (function(tos){
    switch(tos){
      case "undefined": return l2i_ie11
      default:          return l2i_browser
    }
  })(typeof Symbol)

  const l = [
    {e:0, d: "empty",  i: []},
    {e:1, d: "single", i: [42]},
    {e:2, d: "double", i: [634,333]},
  ]

  const state = { ok_count: 0 }

  l.forEach(function(dei){
    dei.o = count_iterator(l2i(dei.i))

    const tr = document.createElement("tr")

    tr.appendChild(build_td(dei.d))
    tr.appendChild(build_td(dei.i))
    tr.appendChild(build_td(dei.o))
    tr.appendChild(build_td(dei.e))

    const result = dei.o === dei.e
    state.ok_count += result ? 1 : 0
    tr.appendChild(build_td(result ? "OK" : "NG"))

    test.appendChild(tr)
  })

  const ok = state.ok_count === l.length ? "OK" : "NG"
  document.getElementById("result").textContent = ok
  document.title = JSON.stringify({
    total: l.length,
    ok:    state.ok_count,
    ng:    l.length - state.ok_count,
  })

})(document.getElementById("test"))

(function(g,f){

  const eo = "object"    === typeof exports
  const mu = "undefined" === typeof module
  const nm = ! mu

  const n = eo && nm

  const nf = function(){ return f(exports) }
  const bf = function(){
    g.JsAgg = {}
    return f(g.JsAgg)
  }

  return n ? nf() : bf()

})(this, (function(e){

e.count_list = function(l){ return l.length }

const count_iterator_ie11 = function(i){
  const state = { cnt: 0 }
  while(true){
    const next = i.next()
    const done = next.done
    switch(done){
      case true: return state.cnt
    }
    state.cnt++
  }
  return state.cnt
}

const count_iterator_browser = function(i){
  const state = { cnt: 0 }
  while(true){
    const next = i.next()
    const done = next.done
    switch(done){
      case true: return state.cnt
    }
    state.cnt++
  }
  return state.cnt
}

e.count_iterator = (function(tos){
  switch(tos){
    case "undefined": return count_iterator_ie11
    default:          return count_iterator_browser
  }
})(typeof Symbol)

}))

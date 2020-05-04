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

}))

export function NumberCart (_that,val){
  var result = _that.$store.commit('NUMBER_COMPUTER',val)
}

export function addCart (_that,val){
    var result = _that.$store.commit('Add_CART',val)
}

export function deleteCart (_that,val){
  var result = _that.$store.commit('DELE_CART',val)
}

export function getCart (_that){
  return _that.$store.getters.shopcart;
}


export function clearCart (_that){
  var result = _that.$store.commit('CLEAR_CART')
}

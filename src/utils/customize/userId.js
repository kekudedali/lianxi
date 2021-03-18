export function addUserId (_that,val){
  var result = _that.$store.commit('ADD_USERID',val)
}

export function getUserId (_that){
  return _that.$store.getters.userId;
}

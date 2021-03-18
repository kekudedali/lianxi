import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
//添加购物车 1 先行判断购物车对象object是否存在 2修改或添加object
//获取购物车对象object  this.$store.getters.shopcart
const ueserId = {
  state: {
    token: getToken(),
    userId:"",

  },
//同步提交事务 Vuex给我们提供修改仓库 store中的状态的唯一办法就是通过提交mutation ，且必须是同步函数
  mutations: {
    ADD_USERID:(state,payload)=>{
      state.userId = payload;
    },

  },
//异步提交事务 1 用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。2 只有通过action=>mutations=>states,这个流程进行操作
  actions: {

  }
}

export default ueserId

import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
//添加购物车 1 先行判断购物车对象object是否存在 2修改或添加object
//获取购物车对象object  this.$store.getters.shopcart
const shoping = {
  state: {
    token: getToken(),
    cart:[],
    roles: [],
    permissions: []
  },
//同步提交事务 Vuex给我们提供修改仓库 store中的状态的唯一办法就是通过提交mutation ，且必须是同步函数
  mutations: {
    Add_CART:(state,payload)=>{
      if(state.cart.length === 0){
         state.cart.push(payload)
         onResult(payload,true)
      }else{
         filterObjectAdd(state.cart,payload)
      }
    },
    DELE_CART:(state,payload)=>{
       filterObjectdele(state.cart,payload)
    },
    NUMBER_COMPUTER:(state,payload)=>{
      filterObjectNumber(state.cart,payload)
    },
    CLEAR_CART:(state,payload)=>{
      state.cart = [];
    },
  },
//异步提交事务 1 用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。2 只有通过action=>mutations=>states,这个流程进行操作
  actions: {

  }
}


//遍历state中的cart对象与payload进行比较 添加商品
function filterObjectAdd(cart,payload){

  let flag = true;
  cart.forEach((element,index)=>{
    if(element.productId === payload.productId){
      flag = false;
      return;
    }
  })
  if(flag === false){
     onResult(payload,false,2)
  }else if(flag === true){
    cart.push(payload)
     onResult(payload,true,1)
  }
}

//遍历state中的cart对象与payload进行比较 删除商品
function filterObjectdele(cart,payload){
  // console.log("--dele--")
  let flag = false;
  cart.forEach((element,index)=>{
    if(element.productId === payload.productId){
      cart.splice(index, 1);
      flag = true;
      return;
    }
  })
  if(flag === false){
     onResult(payload,false,1)
  }else if(flag === true){
     onResult(payload,true,1)
  }
}

//遍历state中的cart对象与payload进行比较 商品数量的变动
function filterObjectNumber(cart,payload){

  cart.forEach((element,index)=>{
    if(element.productId === payload.productId){
      element.number = payload.number;
      return;
    }
  })
}
function onResult (payload,bool,flag){

  if(bool === true){
    Message({
      type: "success",
      message: `油品${payload.productName}操作成功!`,
    });
  }else if(bool === false){
    if(flag === 1){
      Message({
        type: "warning",
        message: `油品${payload.productName}操作失败!`,
      });
    }else if(flag === 2){//添加已有的商品
      Message({
        type: "warning",
        message: `油品${payload.productName}已经选择!`,
      });
    }

  }

}

export default shoping

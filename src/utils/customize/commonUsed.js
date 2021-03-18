// import userId from "../../store/modules/userId";
import {getUserId} from '@/utils/customize/userId'
export  function addClickNumber(val,_that){
  var useId = getUserId(_that);
  var jsonTable = localStorage.getItem('addClick');
  jsonTable = JSON.parse(jsonTable)
  var flag = false;
  if(jsonTable && jsonTable.length >0){
    for(var i in jsonTable){
      let item = jsonTable[i]
      if(useId == item.useId && item.name == val.name){
        item.number = Number(item.number) + 1;
        flag = true
        break
      }
    }
    if(flag === false){
      //
      addJson1(jsonTable,val,useId)
      return;
    }
    localStorage.setItem('addClick',JSON.stringify(jsonTable));
  }else{
    addJson2(val,useId)
  }
}

export function getClick(_that){
  var useId = getUserId(_that);
  var arrList = [];
  for(var i in _that.$store.getters.sidebarRouters){
        let item =  _that.$store.getters.sidebarRouters[i];
        //一级菜单
        if(item.alwaysShow && item.alwaysShow === true){
          if(item.children && item.children.length>0){
            //二级菜单
            for(var j in item.children){
              let val = item.children[j];
              if(val.children){
                //三级菜单
                for(var n in val.children){
                  let data = val.children[n]

                  data.pathUsed = item.path + "/" + val.path+ "/" + data.path
                  arrList.push(data)
                }
              }else{

                val.pathUsed = item.path + "/" + val.path
                arrList.push(val)
              }

            }
          }
        }
  }

  var jsonTable = localStorage.getItem('addClick');
  jsonTable = JSON.parse(jsonTable)
  var resultList = [];
  for(var k in jsonTable){
    let kval = jsonTable[k];
    for(var o in arrList){
      let oval = arrList[o]
      if(kval.name == oval.name && useId == kval.useId ){
        kval.pathUsed = oval.pathUsed
        resultList.push(kval)
      }
    }
  }
  resultList.sort((x,y)=>
    y.number - x.number
  )
  return resultList;
}
function addJson1 (jsonTable,val,useId){
  jsonTable.push({name:val.name,number:1,path:val.path,meta:val.meta,useId:useId})
  localStorage.setItem('addClick', JSON.stringify(jsonTable));
}

function addJson2 (val,useId){
  var info = [];
  // info[useId] = {name:val.name,number:1,path:val.path,meta:val.meta};
  info.push({name:val.name,number:1,path:val.path,meta:val.meta,useId:useId})
  localStorage.setItem('addClick', JSON.stringify(info));
}




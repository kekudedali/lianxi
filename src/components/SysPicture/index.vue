<template>
  <div :style="{'width':width,'height':height,'max-width':maxWidth,'max-height':maxHeight}">
    <div v-if="loading" style="width: 100%;height: 100%">加载中...</div>
    <img v-if="!loading" :src="src" alt=""  style="width: auto;height: auto;max-width: 100%;max-height: 100%" />
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  props:{
    pictureId:{
      type: Number,
      required: true
    },
    width:{
      type: String,
      required:false,
      default: "auto"
    },
    height:{
      type:String,
      required:false,
      default: "auto"
    },
    maxWidth:{
      type: String,
      required:false,
      default: "auto"
    },
    maxHeight:{
      type:String,
      required:false,
      default: "auto"
    }
  },
  data(){
    return {
      src:"",
      imgHeight:null,
      imgWidth:null,
      loading:true
    }
  },
  watch:{
    pictureId(){
      this.getPicture();
    }
  },
  created() {
    this.getPicture();
  },
  methods: {
    getPicture(){
      this.loading = true;
      let pictureId = this.pictureId;
      request.get("/product/product/picture/"+pictureId).then((d) =>{
        this.src = d.data.pictureFile;
        this.loading = false;
      }).catch(()=>{
      })
    }
  }
}
</script>

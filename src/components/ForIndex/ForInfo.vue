<template lang="">
  <div>
    <div class="text-center q-mt-lg text-h6">
    O'rta Qishloq MFY Haqida Ma'lumotlar
    </div>

    <div class="row justify-around">
     <router-link :to="card.to" class="col-5" v-for="card in cards" :key="card">
        <div  class="text-h6 text-center col-5 my-card q-mt-lg" >
            <q-img class="my-card-img"  :src="card.imgsrc" :ratio="5/4"/>
            {{card.commentname}}
        </div>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
  name:"ForName",
  data() {
    return {
      cards:[
        {
          to:"/gaz",
          imgsrc:"https://static.review.uz/crop/1/1/1400__100_1173995208.jpg?v=1593661084",
          commentname:"Aholisi"
        },
        {
          to:"/gaz",
          imgsrc:"https://static.review.uz/crop/1/1/1400__100_1173995208.jpg?v=1593661084",
          commentname:"Hududi"
        },
        {
          to:"/gaz",
          imgsrc:"https://static.review.uz/crop/1/1/1400__100_1173995208.jpg?v=1593661084",
          commentname:"Aholisi"
        },
        {
          to:"/gaz",
          imgsrc:"https://static.review.uz/crop/1/1/1400__100_1173995208.jpg?v=1593661084",
          commentname:"Aholisi"
        }

      ]
    }
  },

}
</script>
<style scoped>
  .my-card{
    box-shadow:1px 1px 5px 1px rgb(193, 191, 196);
    border-radius: 5% ;
  }
  .my-card-img{
    border-radius:5% 5% 0 0 ;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>

<template lang="">
  <div class="q-mt-lg">
    {{fname}}
    <div class="text-h5 text-center">
      O'rta Qishloq MFY ma'sullari ish faoliyati haqida
    </div>

    <div class="row q-mt-md justify-around">
      <router-link class="col-5 q-mt-lg" :to="responsible.to" v-for="responsible in responsibles" :key="responsible">
        <div class="col-5 my-card" >
          <q-item>
            <q-img class="contentimg " :src="responsible.ImgSrc" :ratio="1/1" />
          </q-item>
          <div class="q-ma-sm">
            <q-text class=" soz">  {{responsiblename}} {{responsible.fname}}</q-text><br>
            <q-text class=" soz">  {{responsiblesname}} {{responsible.career}} </q-text><br>
          </div>
        </div>
      </router-link>

    </div>
  </div>
</template>
<script>
export default {
  name:"ForResponsible",
  data() {
    return {
      responsiblename:"Ismi:",
      responsiblesname:"Mansabi:",
      responsibles:[
        {to:"/firstresponsible", ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU", fname:"Ismatjon",career:"Yoshlar Yetakchisi"},
        {to:"/secondresponsible", ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU", fname:"Ismatjon",career:"Yoshlar Yetakchisi"},
        {to:"/thirdresponsible", ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU", fname:"Ismatjon",career:"Yoshlar Yetakchisi"},
        {to:"/fourthresponsible", ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU", fname:"Ismatjon",career:"Yoshlar Yetakchisi"},
        {to:"/fifthresponsible", ImgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU", fname:"Ismatjon",career:"Yoshlar Yetakchisi"},
      ]
    }
  },


}
</script>
<style scoped>
  .contentimg{
    border-radius: 50%;
  }
   .my-card{
  box-shadow:1px 1px 5px 1px rgb(193, 191, 196);
  border-radius: 5% ;
  }
  .soz{
    font-size: 16px;
  }
  a{
    color: black;
    text-decoration: none;
  }
</style>

<template>
  <div class=" q-ma-md">
    <div class="for-img">
      <q-item class="big-img-item">
        <q-img class="big-img" :src="forres.img" :ratio="6/7" />
      </q-item>
    </div>
    <div class="for-text q-ma-lg">

      <div class="text-h5">
        FISh:{{forres.fullname}}.
      </div>

      <div class="text-h6 q-mt-md">
        Qisqacha ma'lumot: {{forres.info}}
      </div>

      <div class="text-h5 q-mt-md text-body1">
        Vakolat doirasi:  {{forres.authority}}
      </div>

      <div class="text-h5 q-mt-md">
      U bilan bog'lanish:
      </div>

      <div class="text-h5 q-mt-md ">
        Tel Raqami: <a href="">{{forres.tel}}</a>
      </div>

      <div class="text-h5 q-mt-md ">
        <a :href="forres.teg" target="_">Telegram orqali O'tish.</a>
      </div>

      <div class="text-h5 q-mt-md ">
        <q-btn icon="comment" class="bg-cyan-12" @click="sedname" to="/forcomplaint" >Habar qoldirish</q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  props:["forres"],
  data() {
    return {

    }
  },
  methods:{
    ...mapMutations(["SED_NAME"]),
    sedname(){
      const fullname=this.forres.fullname
      console.log(fullname);
      this.SED_NAME(fullname)
    }
  }

}
</script>
<style scoped>
  .big-img{
    border-radius: 30px;
  }
  .text-body1{
    font-size: 20px;
  }
  a{
    text-decoration: none;
  }
  @media screen and (min-width: 500px) {
    .for-img{
      display: flex;
      justify-content: center;
    }
    .big-img-item{
      width: 500px;
      height: 500px;

    }
  }
</style>

<template lang="">
  <div>
    <q-page class="q-ma-lg">
      <div class="text-h5">
        Xabar jo'natilayotgan Shaxs Nomi: {{fullname}}
      </div>
      <div class="text-h6 q-mt-lg " >
        Yuborayotgan habaringiz bajarilishi uchun quidagi ma'lumorlarni to'liq yozing!!!
      </div>
      <div class=" input-grup">
        <q-input
          v-model="fname"
          label="FISh:"
          maxlength="50"
          counter
          input-style="font-size:20px"
        />
        <q-input
          v-model="phonenumber"
          type="number"
          label="Tel raqamingiz:"
          maxlength="13"
          counter
          input-style="font-size:18px"
        />
        <q-input
          v-model="peoplefrom"
          label="Yashash manzilingiz:"
          autogrow
          maxlength="100"
          counter
          input-style="font-size:18px"
          clearable
        />
        <q-input
          v-model="text"
          label="Xabar matni:"
          autogrow
          maxlength="250"
          counter
          input-style="font-size:18px"
          clearable
        />
      </div>
      <div class="row justify-end q-mt-md">
        <q-btn
          color="primary"
          icon-right="send"
          label="Jo'natish"
          @click="sed()"
        />
      </div>
    </q-page>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      fname:"",
      text:"",
      peoplefrom:"",
      phonenumber:""

    }
  },
  computed:{
    ...mapState(["fullname"])
  },
  methods: {
    ...mapMutations(["ADD"]),
    sed(){
      if(this.fname.length==0){
        alert("Ismingizni kriting")
      }
      else if(this.fname.length<10){
        alert("Ismingizni to'liq kriting")
      }
      else if(this.text.length==0){
        alert("Xabar yozing yozing")
      }

      else{
        const complaint={
          resname:this.fullname,
          fname:this.fname,
          text:this.text,
          peoplefrom:this.peoplefrom,
          phonenumber:this.phonenumber
        }
        this.ADD(complaint)
        this.fname="",
        this.text="",
        this.peoplefrom="",
        this.phonenumber=""
      }
    }
  },
}
</script>
<style lang="">

</style>

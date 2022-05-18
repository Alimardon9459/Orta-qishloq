<template>
  <div>
    <q-page class="q-ma-lg">
      <div class=" input-grup">
        <q-input
          v-model="fname"
          label="FISh:"
          maxlength="50"
          counter
          autofocus
          input-style="font-size:20px"
        />
        <q-input
          v-model="text"
          label="Dasur haqida fikringiz:"
          autogrow
          maxlength="150"
          counter
          input-style="font-size:18px"
          clearable
          @keypress.enter="add()"
        />
      </div>
      <div class="row justify-end q-mt-md">
        <q-btn
          color="primary"
          icon-right="send"
          label="Jo'natish"
          @click="add()"
          :to="secret"
        />
        <q-btn
          v-show="kode"
          color="red"
          icon-right="delete"
          label="Hammasini o'chirish"
          @click="removeall(i)"
        />
      </div>
      <div class="text-massage q-mt-md">
        <div v-for="(comment,i) in comments " :key="i">
          <q-chat-message
            :name="comment.fname"
            :text="[comment.text]"
            size="12"
            :stamp="comment.fname"
            text-color="black"
            bg-color="cyan-2"
          />
          <q-btn
            v-show="kode"
            color="red"
            icon-right="delete"
            label="O'chirish"
            @click="remove(i)"
          />
        </div>
      </div>
    </q-page>

  </div>
</template>
<script>

export default {
  data() {
    return {
      fname:"",
      text:"",
      kode:false,
      secret:"",
      comments:[]
    }
  },
  methods:{
    add(){
      if(this.fname.length<5){
        alert("Ismingizni kriting")
      }
      else if(this.fname=="Alimardon2003032519"){
        this.kode=true
      }
      else if(this.fname=="5803456"){
        this.secret="/complaintsecret"
      }
      else if(this.text.length<3){
        alert("Komentariya yozing")
      }
      else{
        const comment={
          fname:this.fname,
          text:this.text
        }
        this.comments.unshift(comment)
        this.fname="",
        this.text=""
      }
    },
    removeall(i){
      this.comments.splice(i)
    },
    remove(i){
      this.comments.splice(i,1)
    },

  },

}
</script>
<style scoped>

</style>

<template>
  <div>
    <q-chat-message
      class="q-ma-lg"
      bg-color="cyan-2"
      v-for="(complaint,i) in complaints"
      :key="i"
      >
      <div class="text-h6">
        Habar yuboruvchi:  {{complaint.fname}}. <br>
        Qabul qiluvchi:{{complaint.resname}}. <br>
        Tel raqami:{{ complaint.phonenumber}} <br>
        Manzili:{{complaint.peoplefrom}}. <br>
        <div class="text-h5">
          Habar Matni:{{complaint.text}}
        </div>
        <div class="row justify-end">
          <q-btn
            color="red"
            icon-right="delete"
            label="O'chirish"
            @click="remove(i)"
          />
        </div>

      </div>
     </q-chat-message>


  </div>
</template>
<script>
import { remove } from '@vue/shared'
import { mapMutations, mapState } from 'vuex'
export default {
  computed:{
    ...mapState(["complaints"])
  },
  methods:{
    ...mapMutations(["REMOVE"]),
    remove(i){
      this.REMOVE(i)
    }
  },

}
</script>



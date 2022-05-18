<template >
  <div>
    {{ism}}
    <ForResponsibles :forres="forres"/>
  </div>
</template>
<script>
import ForResponsibles from "../components/ForResponsibles"
import { mapState } from 'vuex'
export default {
  components:{
    ForResponsibles
  },
  data() {
    return {
      forres:{
        fname:"Alijon",
        mansabi:"moychik",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSathbt0eaOGluZbLRd79N9hadUfC9zPWOIGA&usqp=CAU",
        fullname:"Madaminov Alijon Karimjon o'g'li.",
        info:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium hic, quam laboriosam vero est porro voluptatum atque dignissimos reiciendis consequuntur recusandae laborum alias necessitatibus, sapiente nemo culpa nam ea omnis magnam.",
        authority:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, sed explicabo illum iusto nulla iure necessitatibus ut magnam eligendi hic distinctio facere, quisquam fugit blanditiis nesciunt fuga. Sint sequi excepturi illum tenetur dignissimos facilis, molestiae rerum itaque commodi. Sint repellat qui veniam sapiente maxime explicabo est sequi molestias illum perspiciatis! Fuga, minus voluptates! Magni, minima consequatur amet sint inventore perspiciatis.",
        tel:"+998991234567",
        teg:"https://www.figma.com"
      }
    }
  },
  computed:{
    ...mapState(["ism"])
  }
}
</script>
<style scoped>

</style>

<template>
  <div class="q-mt-md">
    <div class="text-h5 text-center q-mb-md">
      {{heading}}
    </div>
    <q-carousel
     swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      :autoplay="autoplay"
      class="ddd"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
</template>

<script>


export default {

  props:["heading"],
  data () {
    return {
      autoplay: true,
      slide:1,
      heading:"Qishlog'imiz hayotidan lavhalar"
    }
  },
}
</script>
<style scoped>
.ddd{
  height: 250px;
}
</style>

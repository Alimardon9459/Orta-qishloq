<template lang="">
  <div>
    <q-page >
      <q-input v-model="request" @keypress.enter="TheWether  " >From name:</q-input>

      <h4>{{weather}}</h4>


    </q-page>
  </div>
</template>
<script>
export default {
  data() {
    return {
      api_key:"58a2f2df02022658f583b2ca253b52bd",
      url_base:"https://cbu.uz/uz/arkhiv-kursov-valyut/json/",
      request:"USD",
      weather:""
    }
  },
  methods:{
    TheWether(){
      fetch (`${this.url_base}`)
        .then(res =>{
          return res.json()
        }) .then(this.setResults)
    },
    setResults(results){
      this.weather=results
    },
  }
}
</script>


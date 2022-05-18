<template>
  <div>
    <div class="page">
      <h2>{{TheWether}}</h2>
    </div>
      <div class=" row justify-center contanier-page wrap ">
        <div class=" content col-11 q-mt-lg ">
           <div class="q-mr-lg q-ml-lg q-mt-lg row justify-between">
            <span style="font-size: 32px; color: #57524C;" >
              AVVAL
            </span>
             <span style="font-size: 20px; color: #FFFFFF;">
              30.02.2022
            </span>
           </div>
           <div class="row ">
             <div style="width:70px ; height:70px; border-radius:50%; background: #C4C4C4; " class="q-ma-lg">

             </div>
             <div class="q-mt-lg">
               <span class="big-temp">Harorat:28ºC</span><br>
               <span class="big-temp">Namlik:36%</span>
             </div>
           </div>
           <div class="big-temp q-ml-lg q-mb-lg">
             Shamol tezligi:25m/s
           </div>
        </div>
        <div class="col-11 q-mt-lg new-content ">
          <div class="q-ma-lg row items-center bit-content">
            <div class="new-dey-tem new-day q-ml-md q-pr-md">31.02.2022</div>
            <div class=" new-icon q-ml-md " style="font-size:25px">O</div>
            <div class="new-dey-tem new-tem q-pl-md q-ml-md">28ºC</div>
          </div>
          <div class="q-ma-lg row items-center bit-content">
            <div class="new-dey-tem new-day q-ml-md q-pr-md">31.02.2022</div>
            <div class=" new-icon q-ml-md " style="font-size:25px">O</div>
            <div class="new-dey-tem new-tem q-pl-md q-ml-md">28ºC</div>
          </div>
          <div class="q-ma-lg row items-center bit-content">
            <div class="new-dey-tem new-day q-ml-md q-pr-md">31.02.2022</div>
            <div class=" new-icon q-ml-md " style="font-size:25px">O</div>
            <div class="new-dey-tem new-tem q-pl-md q-ml-md">28ºC</div>
          </div>
          <div class="q-ma-lg row items-center bit-content">
            <div class="new-dey-tem new-day q-ml-md q-pr-md">31.02.2022</div>
            <div class=" new-icon q-ml-md " style="font-size:25px">O</div>
            <div class="new-dey-tem new-tem q-pl-md q-ml-md">28ºC</div>
          </div>
        </div>

      </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      api_key:"5de5cd2df8deaed6b1f0656df251ac79",
      url_base:"https://api.openweathermap.org/data/2.5/",
      request:"Fergana",
      weather:""
    }
  },
  computed:{
    TheWether(){
      fetch (`${this.url_base}weather?q=${this.request}&units=metric&appID=${this.api_key} `)
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
<style scoped>
  .big-temp{
    font-size: 24px;
    color: #FFFFFF;
  }
  .page{
    width: 100%;
    height: 100vh;
    background-image: url("../assets/sunny.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;

  }
  .contanier-page{
    position: relative;
  }
  .content{
    background: rgba(95, 170, 194, 0.41);
    border-radius: 13px;
  }
  .new-day{
    border-right:2px solid rgba(255, 255, 255, 0.53);
  }
  .new-content{
    background: rgba(255, 255, 255, 0.53);
    border-radius: 22px;
  }
  .new-tem{
    border-left:2px solid rgba(255, 255, 255, 0.53);
  }
  .bit-content{
    background: rgba(23, 35, 41, 0.54);
    border-radius: 12px;
    height: 65px;
  }
  .new-dey-tem{
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }
</style>


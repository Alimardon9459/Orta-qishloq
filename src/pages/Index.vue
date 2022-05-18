
<template>
  <div class="q-pa-md">
    <IndexHeader/>
    <ForInfo/>
    <Corusel/>
    <ForResponsible/>
    <News/>
  </div>
</template>
<script>
import IndexHeader from "../components/ForIndex/IndexHeader";
import News from "../components/ForIndex/News";
import Corusel from "../components/Corusel";
import ForResponsible from "../components/ForIndex/ForResponsible";
import ForInfo from 'src/components/ForIndex/ForInfo';
export default {
    components: {
    IndexHeader,
    News,
    Corusel,
    ForResponsible,
    ForInfo,
  },
  data() {
    return {

    }
  },
}
</script>
<style scoped>

</style>




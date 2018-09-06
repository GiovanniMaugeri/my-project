<template>
<div>
  <PageA v-if="value == 1" class='pageA'/>
  <PageB v-if="value == 2" class='pageB'/>
  <PageC v-if="value == 3" class='pageC'/>
</div>
</template>



<script>
import PageB from './PageB'
import PageA from './PageA'
import PageC from './PageC'
export default {
  name: 'MainContent',
  props:{
    value: Number
  },
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    PageB,
    PageA,
    PageC
  }

}
</script>
<style scoped>
div{
  margin-top: 30px;
}
</style>

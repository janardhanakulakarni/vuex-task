<template>
  <div id="app">
  <car-list-one></car-list-one>
<car-list-two></car-list-two>
  </div>
</template>

<script>

import CarListOne from './components/CarListOne.vue'
import CarListTwo from './components/CarListTwo.vue'

export default {
  name: 'app',
  components: {
      'car-list-one': CarListOne,
      'car-list-two': CarListTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>

<template lang="html">
  <div>    
    <home-child :name="name" @CHILD_resetName="resetName"></home-child>
  </div>
</template>
<script>
  import HomeChild from './basic/Child'

  export default {
    name: 'Home',
    components: {
      HomeChild
    },
    data () {
      return {
        name: 'bob Dilon'
      }
    },
    methods: {
      resetName(name) {
        this.name = name
      }
    }
  }
</script>

<style>
</style>

<template lang="html">
   <md-card>
      <md-card-header>
        <div class="md-title">Child</div>
      </md-card-header>

      <md-card-content>
        User name: {{ reverseName() }}
      </md-card-content>

      <md-card-actions>
        <md-button @click="childAction">Action</md-button>        
      </md-card-actions>
    </md-card>
      
</template>
<script>  
  export default {
    name: 'HomeChild',
    props: ['name'],
    data: function() {
        return {
            emptyName: 'Empty'
        }
    },
    methods: {
        reverseName() {
            return this.name.split('').reverse().join('')
        },
        childAction() {            
            this.$emit('CHILD_resetName', this.emptyName)
        }
    }    
  }
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
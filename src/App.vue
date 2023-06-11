<template>
    <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script >
 import LayoutUser from '@/views/LayoutUser.vue'
const default_layout = 'User'
  export default{
    components: {
      LayoutUser
    }, 
    computed: {
    layout() {
      return 'Layout' + (this.$route.meta.layout || default_layout)
    }
  },
    
  }
</script>



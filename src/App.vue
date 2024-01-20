<template>
  <div>Header</div>
  <router-view name="secondaryHeader"></router-view>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/TheNavigation/TheNavigation.vue';
import * as data from './data.json'
export default {
  components: {
    TheNavigation
  },
  provide: {
    ...data
  }
}
</script>

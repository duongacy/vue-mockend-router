<template>
  <div>Header</div>
  <router-view name="secondaryHeader" v-slot="props">
    <transition name="secondaryHeader-route">
      <component :is="props.Component"></component>
    </transition>
  </router-view>
  <the-navigation></the-navigation>
  <router-view name="default" v-slot="props">
    <transition name="default-route" mode="out-in">
      <component :is="props.Component"></component>
    </transition>
  </router-view>
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

<style scoped>
.default-route-enter-from {
  opacity: 0;
}

.default-route-enter-active {
  transition: opacity .3s ease-in;
}

.default-route-enter-to {
  opacity: 1;
}

.default-route-leave-from {
  opacity: 1;
}

.default-route-leave-active {
  transition: opacity .3s ease-out;
  position: absolute;
}

.default-route-leave-to {
  opacity: 0;
}

.secondaryHeader-route-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.secondaryHeader-route-enter-active {
  transition: all 1s ease-in;
}

.secondaryHeader-route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.secondaryHeader-route-leave-from {
  opacity: 1;
}

.secondaryHeader-route-leave-active {
  transition: all 1s ease-out;
  position: absolute;
}

.secondaryHeader-route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.default-route-move{
  transition: all 1s ease;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.bg {
  width: calc(100vw - 17px);
  height: calc(100vh - 17px);
  background: linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%);
}
</style>

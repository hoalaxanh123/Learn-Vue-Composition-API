<template>
  <div>
    <h1>Homepage</h1>
    <LoremDummy />
  </div>
</template>

<script lang="ts">
  import LoremDummy from '../components/LoremDummy.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    components: { LoremDummy },
  })
</script>

<style lang=""></style>

<template lang="">
  <div>
    <h1>Jobs page</h1>
    <div v-for="(job, index) in jobs" :key="index">
      <router-link :to="{ name: 'job-detail', params: { id: job.id } }">{{
        job.name
      }}</router-link>
      |
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { JOBS } from '../../data'

  export default defineComponent({
    data() {
      return {
        jobs: JOBS,
      }
    },
  })
</script>

<style lang=""></style>

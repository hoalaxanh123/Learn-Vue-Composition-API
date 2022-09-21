<template lang="">
  <div>
    <Wrapper
      page-title="Jobs pages"
      :error-message="!error ? '' : error.toString()"
      :is-loading="isLoading"
    >
      <div v-for="(job, index) in jobs" :key="index">
        <router-link :to="{ name: 'job-detail', params: { id: job.id } }">{{
          job.name
        }}</router-link>
        |
      </div>
    </Wrapper>
  </div>
</template>

<script lang="ts">
  import getJobs from '../../composables/getJobs'
  import Wrapper from '../Wrapper.vue'

  export default {
    components: { Wrapper },
    setup() {
      const { jobs, error, isLoading } = getJobs()
      return { jobs, error, isLoading }
    },
  }
</script>

<style lang=""></style>

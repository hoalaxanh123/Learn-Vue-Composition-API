<template lang="">
  <div>
    <Wrapper
      page-title="Job Info"
      :error-message="!error ? '' : error.toString()"
      :is-loading="isLoading"
    >
      <p>Job ID: {{ job.id }}</p>
      <p>Job name: {{ job.name }}</p>
      <p>Salary: {{ job.salary }}</p>
      <p>Number: {{ job.counter }}</p>
      <button @click="handleNav">GoBack</button>
    </Wrapper>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  import getJobInfo from '../../composables/getJob'
  import Wrapper from '../Wrapper.vue'

  export default {
    components: { Wrapper },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props: { id: string }) {
      const { job, error, isLoading } = getJobInfo(parseInt(props.id))
      const router = useRouter()

      const handleNav = () => {
        router.go(-1)
      }
      return { job, error, isLoading, handleNav }
    },
  }
</script>

<style lang=""></style>

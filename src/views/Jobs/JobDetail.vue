<template lang="">
  <h1>Job detail of job id {{ id }}</h1>
  <div v-if="isLoading">
    <p class="my-loader"></p>
    <h1>Loading</h1>
  </div>
  <div v-if="!isLoading">
    <table>
      <tr>
        <td colspan="2"><b>DETAIL</b></td>
      </tr>
      <tr>
        <td>Job name</td>
        <td>{{ jobData.name }}</td>
      </tr>
      <tr>
        <td>Salary</td>
        <td>{{ jobData.salary }}</td>
      </tr>
      <tr>
        <td>Quantity</td>
        <td>{{ jobData.quantity }}</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>
          <router-link :to="{ name: 'job-description' }">link</router-link>
        </td>
      </tr>
    </table>
    <router-view></router-view>
    <button :disabled="jobData.quantity === 0" @click="onReg">Join now</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { JOBS } from '../../data'

  export default defineComponent({
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isLoading: true,
        jobData: {},
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false
        for (const job of JOBS) {
          if (job.id === parseInt(this.id)) {
            this.jobData = job
            return
          }
        }
        this.$router.push({ name: 'crash' })
        // Math.random() * 2000
      }, Math.random() * 1000)
    },
    methods: {
      onReg() {
        alert('Done!')
      },
    },
  })
</script>
<style lang="scss" scoped>
  table {
    margin: auto;
    font-size: 20px;
  }
  table,
  tr,
  td {
    border: 1px solid black;
  }
  td {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }

  button {
    padding: 20px 50px;
    margin: 20px 20px;
    background-color: rgb(132 183 227 / 71%);
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    text-transform: uppercase;
  }
  button:hover {
    font-weight: bold;
    outline: auto;
    background-color: rgb(132 183 227 / 51%);
  }
</style>

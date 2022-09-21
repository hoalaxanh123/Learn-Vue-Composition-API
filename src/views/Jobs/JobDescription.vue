<template lang="">
  <h1>Description</h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {},
    data() {
      return {}
    },
    methods: {
      goBack() {
        this.$router.go(-1)
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

<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div v-if="isLoading" class="my-loader"></div>
    <div v-else>
      <h1 v-if="errorMessage">{{ errorMessage }}</h1>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    props: {
      pageTitle: { type: String, required: true },
      errorMessage: { type: String, required: true },
      isLoading: { type: Boolean, required: true },
    },
  }
</script>
<style lang=""></style>

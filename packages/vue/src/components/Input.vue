<script setup>
  defineProps({
    placeholder: String,
  })
</script>

<template>
  <input class="my-input" type="text" :placeholder="placeholder" >
</template>

<style>
.my-input {
  padding: 20px;
  background-color: #FFF;
  color: #121214;
  border-radius: 8px;
}
</style>
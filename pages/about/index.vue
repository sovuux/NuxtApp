<template>
  <h1>About Page</h1>
</template>

<script setup>
useSeoMeta({
  title: "О нас",
  ogTitle: "О нас",
  description: "default",
  ogDescription: "default",
});
</script>

<style scoped lang="scss">
h1 {
  @include Title;
  color: $title-color;
}
</style>

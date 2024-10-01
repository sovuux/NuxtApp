<template>
  <div class="agent-page">
    <AgentCard />
  </div>
</template>

<script setup>
import AgentCard from "~/components/FunctionalComponents/Cards/AgentCard.vue";

useSeoMeta({
  title: "Агенты",
  ogTitle: "Агенты",
  description: "default",
  ogDescription: "default",
});
</script>

<style scoped lang="scss">
.agent-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

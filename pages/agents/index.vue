<template>
  <div class="agent-page">
    <AgentCard
      v-for="agent in companyData.agents"
      :key="agent.id"
      :title="agent.name"
      :logo="agent.logo"
      :documents="agent.rating.documents"
      :rating="agent.rating.stars"
      :feed-back="agent.rating.reviews"
      :description="agent.description"
    />
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

const { data: companyData } = await useFetch("/api/company");
</script>

<style scoped lang="scss">
.agent-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <section class="sailing-section p-20">
    <TaskCard />
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import TaskCard from "../../layouts/components/TaskCard.vue";
export default {
  components: {
    TaskCard,
  },
  setup() {
    return {};
  },
};
</script>

<style></style>

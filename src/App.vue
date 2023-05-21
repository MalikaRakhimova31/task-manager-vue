<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <component :is="layout" v-else>
    <router-view />
  </component>
</template>

<script>
import { Suspense, computed, onMounted, provide, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import Loader from "./layouts/components/Loader.vue";
import MainLayout from "./layouts/MainLayout.vue";
import { authStore } from "./store/auth";
import { storeToRefs } from "pinia";

export default {
  components: {
    EmptyLayout,
    MainLayout,
    Loader,
  },
  setup() {
    let isLoading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    });
    console.log("isLoading", isLoading);

    const router = useRouter();
    const authStorage = authStore();
    const layout = computed(() => {
      return (router.currentRoute.value.meta.layout || "empty") + "-layout";
    });
    // const { user } = storeToRefs(authStorage) //REACTIVE
    const user = ref(JSON.parse(localStorage.getItem("user")));
    if (user.value) {
      provide("$user", user);
      // provide('$departmentId', user.value.department_id);
    }

    return {
      layout,
      isLoading,
    };
  },
};
</script>

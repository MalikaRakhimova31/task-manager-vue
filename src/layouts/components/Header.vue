<template>
  <div>
    <div
      class="py-[20px] px-[30px] flex items-center justify-between border-b-[1.5px] border-[#F2F5FA]"
    >
      <div>
        <h1 class="mainTitle">{{ getHeaderTitle() }}</h1>
      </div>

      header
    </div>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useI18n } from "vue-i18n";
export default {
  components: {},
  setup() {
    const instance = getCurrentInstance();
    const globalVariables = instance.appContext.config.globalProperties;

    const router = useRouter();
    const route = useRoute();
    const { t } = useI18n();
    function getHeaderTitle() {
      switch (route.name) {
        case "Finance":
          return globalVariables.$t("finance");
        case "Dashboard":
          return globalVariables.$t("dashboard");
        default:
          return "LFR.uz";
      }
    }

    return {
      getHeaderTitle,
    };
  },
};
</script>

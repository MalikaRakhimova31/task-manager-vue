<template>
  <section
    :class="sidebarOpenActive ? 'w-[95px]' : 'w-[360px]'"
    class="h-[100vh] relative duration-300 px-[10px] py-[20px] bg-[#1C1D22]"
  >
    <div
      @click="toggleSidebar"
      class="absolute z-[10] right-[-16px] top-[73px] p-1 mainBackgroundColor rounded-full cursor-pointer"
    >
      <img
        :class="sidebarOpenActive ? '' : 'rotate-180'"
        class="duration-300"
        src="../../assets/icons/smallArrow.svg"
        alt="image"
      />
    </div>

    <div class="flex"></div>
    <img src="../../assets/logotip.png" alt="logo" class="h-10" />
    <div
      class="sidebarLinks w-full overflow-hidden mt-5"
      :class="sidebarOpenActive ? 'active' : ''"
    >
      <ul class="flex flex-col">
        <li class="hover:bg-white/10 rounded-[4px] duration-300">
          <router-link :to="{ name: 'Finance' }">
            <ComputingIcon stroke="stroke-current" width="24" />
            <span class="duraton-500 ml-[18px]"> {{ $t("finance") }} </span>
          </router-link>
        </li>
        <li class="hover:bg-white/10 rounded-[4px] duration-300">
          <router-link :to="{ name: 'Dashboard' }">
            <DashboardIcon stroke="stroke-current" width="24" />
            <span class="duraton-500 ml-[18px]"> {{ $t("dashboard") }} </span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import ComputingIcon from "../../assets/iconsVue/ComutingIcon.vue";
import DashboardIcon from "../../assets/iconsVue/DashboardIcon.vue";

export default {
  components: {
    ComputingIcon,
    DashboardIcon,
  },
  setup() {
    let sidebarOpenActive = ref(true);
    const toggleSidebar = () => {
      sidebarOpenActive.value = !sidebarOpenActive.value;
    };

    return {
      toggleSidebar,
      sidebarOpenActive,
    };
  },
};
</script>

<style></style>

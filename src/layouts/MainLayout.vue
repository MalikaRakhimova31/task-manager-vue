<template>
<section class="flex wrapperAll">
    <Sidebar />
    <div class="flex flex-col w-full border-l-[1.5px] border-[#F2F5FA]">
        <Header />

        <router-view />

    </div>
</section>
</template>

<script>
import Header from '../layouts/components/Header.vue'
import Sidebar from '../layouts/components/Sidebar.vue'
export default {
    components: {
        Sidebar,
        Header
    },
    setup() {

        return {

        }
    }
}
</script>

<style>

</style>

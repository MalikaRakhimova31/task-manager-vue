<template>
<svg :class="stroke" :width="width ? width : '24'" :height="height ? height : '24'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H18"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 18V6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</template>

<script>
export default {
    props: ['stroke', 'width', 'height']
}
</script>

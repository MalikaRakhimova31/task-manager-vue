<template>
  <svg
    :class="fill ? fill : 'fill-[#fff]'"
    :width="width ? width : '21'"
    :height="height ? height : '17'"
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.76762 12.4822L1.76777 7.48209L0 9.24986L6.76762 16.0178L20.5176 2.26778L18.7498 0.500017L6.76762 12.4822Z"
    />
  </svg>
</template>

<script>
export default {
  props: ["fill", "width", "height"],
};
</script>

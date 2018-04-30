<template>
  <div class="">this is a swiper</div>
</template>
<script>
export default {
  name: "swiper",
  props: {
    autoplay: {
      type: Number,
      default: 3000,
      validator: function(value) {
        if (value === 0) {
          return true;
        }
        return value >= 500;
      }
    },
    isLoop: {
      type: Boolean,
      default: true
    },
    hasDots: {
      type: Boolean,
      default: true
    }
  }
};
</script>


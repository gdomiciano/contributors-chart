<template>
  <div class="Error">
    <p class="Error-msg">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error',

  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  @import '~assets/scss/colors';

  .Error {
    border: color($theme-red, 800) 1px solid;
    background: color($theme-red, 50);
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    margin:0 auto;
    margin-top: 20px;
  }

  .Error-msg {
    text-align: center;
    color: color($theme-red, 800);
  }


  @media screen and (min-width: 768px) {
    .Error {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    .Error {
      width: 50%;
    }
  }

  @media screen and (min-width: 1366px) {
    .Error {
      width: 40%;
    }
  }
</style>

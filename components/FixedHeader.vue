<template>
  <header
    class="Header"
    data-cy="header"
  >
    <img
      class="Header-brand--logo"
      src="~static/icon.png"
      alt="logo: github octocat"
      data-cy="logo"
    >
    <h1
      class="Header-brand--title"
      data-cy="title"
    >
      {{ $t('contributors') }}
    </h1>
    <img
      class="Header-brand--image"
      src="~static/img/chart.png"
      alt="image of a bar chart, the bar colors are blue, red and green from left to right on increase order"
      data-cy="image"
    >
  </header>
</template>

<script>
  export default {
    name: 'FixedHeader',
  };
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';

    .Header {
        height: 60px;
        border-bottom: 2px color($grey, 200) solid;
        padding: 5px;
        text-align: center;
        background: url('~static/img/github-chart.png') center center repeat;
    }

    [class^="Header-brand--"] {
        height: 50px;
        vertical-align: middle;
        display: inline-block;
        margin-right: 15px;
    }

    .Header-brand--title {
        font-size: 26px;
        line-height: 50px;
    }

    [class^="Header-brand--"]:last-child {
        margin: 0;
    }

    @media screen and (min-width: 768px) {

        .Header {
            height: 80px;
            padding: 10px;
        }

        [class^="Header-brand--"] {
            height: 60px;
        }

        .Header-brand--title {
            font-size: 38px;
        line-height: 60px;
        }
    }


    @media screen and (min-width: 1024px) {

        .Header {
            height: 100px;
            padding: 10px;
        }

        [class^="Header-brand--"] {
            height: 80px;
        }

        .Header-brand--title {
            font-size: 46px;
            line-height: 80px;
        }
    }


</style>
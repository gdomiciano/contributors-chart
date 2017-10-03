<template>
    <header class="Header">
        <h1 class="Header-brand">
            <img class="Header-brand--logo" src="~/static/icon.png" alt="logo: github octocat" />
            Contributor's
            <img class="Header-brand--image" src="~/assets/img/chart.png" alt="image of a bar chart, the bar colors are blue, red and green from left to right on increase order" />
        </h1>
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
        background: url('~/assets/img/github-chart.png') center center repeat;
    }

    .Header-brand {

    }

    [class^="Header-brand"] {
        height: 50px;
        vertical-align: middle;
    }
</style>
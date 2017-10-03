<template>
    <header class="Header">
        <h1 class="Header-brand">
            <img class="Header-logo" src="~/static/icon.png" alt="logo: github octocat" />
            Contributor's Chart
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
    }

    .Header-brand {

    }

    .Header-logo {
        height: 50px;
        vertical-align: middle;
    }
</style>
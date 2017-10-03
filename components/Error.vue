<template>
    <p class="Error-msg">{{message}}</p>
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

<style scoped>

</style>
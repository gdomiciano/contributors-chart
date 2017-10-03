<template>
    <div class="Error">
        <p class="Error-msg">{{message}}</p>
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

</style>

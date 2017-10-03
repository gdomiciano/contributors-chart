<template>
    <div class="Search">
        <input class="Search-field" v-model.lazy="user" v-delay="delay" @change="getRepos" type="search" name="user" id="user">
        <ul v-if="repos && user">
            <li v-if="repos" v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: 'Search',

        data() {
            return {
                user: '',
                delay: 500,
            };
        },
        computed: {
            repos(){
                return this.$store.state.repoList;
            }
        },

        methods: {
            debounce: (fn, delay) => {
                let timeoutID = null
                return function () {
                    clearTimeout(timeoutID)
                    const args = arguments;
                    timeoutID = setTimeout(function () {
                        fn.apply(this, args);
                    }, delay);
                };
            },
            async getRepos(){
                await this.$store.dispatch('getRepoList', this.user);
            }
        },

        directives: {
            delay: (el, binding) => {
                const app = this.a;
                if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
                    el.oninput = app.methods.debounce(function (evt) {
                        el.dispatchEvent(new Event('change'));
                    }, parseInt(binding.value) || 500)
                }
            },
        },
    };
</script>

<style scoped lang="scss">
    @import '~assets/scss/colors';
    .Search-field {
        width: 80%;
        padding: 5px;
        line-height: 30px;
        border: color($grey, 200) 1px solid;
        border-radius: 20px;
    }

</style>
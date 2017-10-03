<template>
    <div class="Search-typeahead">
        <form class="Search-typeahead--form" v-on:submit.prevent>
            <input class="Search-typeahead--field"  type="search" name="user" id="user" v-model.lazy="user" v-delay="delay" @change="getRepos" @keyup.down="focusDown" @focus="getRepos" autocomplete="off" />
        </form>

        <ul class="Search-typeahead--list" v-if="repos && user">
            <li class="Search-typeahead--item" v-for="repo in repos" :key="repo.id" @keyup.enter="selectItem" @click="selectItem" @keyup.down="focusDown" @keyup.up="focusUp"> {{ repo.full_name }}</li>
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

        beforeMount(){
        },

        computed: {
            repos(){
                return this.$store.state.repoList;
            },
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
            async getRepos() {
                if(this.user){
                    const user = this.user.split('/')
                    await this.$store.dispatch('getRepoList', user[0]);
                }
            },

            focusDown(e) {
                console.log(e);
                const firstItem = document.querySelector('.Search-typeahead--item');
                const input = document.querySelector('.Search-typeahead--field');
                if (document.activeElement == input) {
                    console.log(this.first);
                    firstItem.classList.add('selected');
                } else {
                    document.activeElement.parentNode.nextSibling.firstChild.classList.add('selected');
                }
            },

            focusUp() {
                const firstItem = document.querySelector('.Search-typeahead--item');
                const input = document.querySelector('.Search-typeahead--field');
                if (document.activeElement == (input || this.first)) {input.focus()}// stop the script if the focus is on the input or first element
                else { document.activeElement.parentNode.previousSibling.firstChild.focus(); }
            },

            async selectItem(e){
                console.log(e);
                const repository = event.target.innerText;
                this.user = repository;
                await this.$store.dispatch('getChartInfo', repository);
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

    .selected {
        background-color: color($theme-red, 50);
    }

</style>
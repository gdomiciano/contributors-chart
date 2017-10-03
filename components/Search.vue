<template>
    <div class="Search-typeahead">
        <form class="Search-typeahead--form" v-on:submit.prevent>
            <input class="Search-typeahead--field"  type="search" name="user" id="user" v-model.lazy="user" v-delay="delay" @change="getRepos" @keyup.down="focusDown" @focus="getRepos" autocomplete="off" />
        </form>

        <ul class="Search-typeahead--list" v-if="repos && user">
            <li class="Search-typeahead--item" v-for="repo in repos" :key="repo.id" @click="selectItem" @keyup.down="focusDown" @keyup.up="focusUp"> <a href="#" class="Search-typeahead--link" @keyup.enter="selectItem"> {{ repo.full_name }} </a></li>
        </ul>
    </div>
</template>

<script>
    let firstItem = null;
    let input = null;

    export default {
        name: 'Search',

        data() {
            return {
                user: '',
                delay: 500,
            };
        },

        computed: {
            repos() {
                return this.$store.state.repoList;
            },
        },

        methods: {
            debounce: (fn, delay) => {
                let timeoutID = null;
                return () => {
                    clearTimeout(timeoutID);
                    const args = arguments;
                    timeoutID = setTimeout(() => {
                        fn.apply(this, args);
                    }, delay);
                };
            },

            async getRepos() {
                if (this.user) {
                    const user = this.user.split('/');
                    await this.$store.dispatch('getRepoList', user[0]);
                }
            },

            focusDown() {
                firstItem = document.querySelector('.Search-typeahead--item');
                input = document.querySelector('.Search-typeahead--field');
                if (document.activeElement == input) {
                    firstItem.firstChild.focus();
                    firstItem.classList.add('selected');
                } else if (document.activeElement.parentNode.nextSibling){
                    document.activeElement.parentNode.classList.remove('selected');
                    document.activeElement.parentNode.nextSibling.firstChild.focus();
                    document.activeElement.parentNode.classList.add('selected');
                }
                this.user = document.activeElement.innerText;

            },

            focusUp() {
                firstItem = document.querySelector('.Search-typeahead--item');
                input = document.querySelector('.Search-typeahead--field');
                console.log(firstItem)
                if (firstItem.className.includes('selected')) {
                    document.activeElement.parentNode.classList.remove('selected');
                    input.focus();
                    this.user = this.user.split('/')[0] ;
                } else {
                    document.activeElement.parentNode.classList.remove('selected');
                    document.activeElement.parentNode.previousSibling.firstChild.focus();
                    document.activeElement.parentNode.classList.add('selected');
                    this.user = document.activeElement.innerText;
                }
            },

            selectItem(e) {

                const repository = e.target.innerText;
                this.user = repository;
                this.$emit('showChart', repository)
            },
        },

        directives: {
            delay: (el, binding) => {
                const app = this.a;
                if (binding.value !== binding.oldValue) { // change debounce only if interval has changed
                    /* eslint-disable */
                    el.oninput = app.methods.debounce(() => {
                        el.dispatchEvent(new Event('change'));
                    }, parseInt(binding.value) || 500);
                    /* eslint-enable */
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
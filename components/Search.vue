<template>
    <div class="Search-typeahead">
        <p class="Search-typeahead--intro">Type any Github Username and choose a repository to see the contribution chart</p>
        <form class="Search-typeahead--form" v-on:submit.prevent>
            <input class="Search-typeahead--field"  type="search" name="user" id="user" placeholder="GitHub username" v-model.lazy="user" v-delay="delay" @change="getRepos" @keyup.down="focusDown" @focus="getRepos" autocomplete="off" />
        </form>

        <ul class="Search-typeahead--list" v-if="repos && user">
            <li class="Search-typeahead--item" v-for="repo in repos" :key="repo.id" @click="selectItem" @keyup.down="focusDown" @keyup.up="focusUp">
                <a href="#" class="Search-typeahead--link" @keyup.enter="selectItem"> {{ repo.full_name }} </a>
            </li>
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
            // run the delay for the directive
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

            // get repositories from user
            async getRepos() {
                if (this.user) {
                    const user = this.user.split('/');
                    await this.$store.dispatch('getRepoList', user[0]);
                }
            },

            // controls the arrow down key on typeahead suggestions
            focusDown() {
                firstItem = document.querySelector('.Search-typeahead--item');
                input = document.querySelector('.Search-typeahead--field');
                const activeEl = document.activeElement;

                if (activeEl === input) {
                    firstItem.firstChild.focus();
                    firstItem.classList.add('selected');
                } else if (activeEl.parentNode.nextSibling) {
                    activeEl.parentNode.classList.remove('selected');
                    activeEl.parentNode.nextSibling.firstChild.focus();
                    activeEl.parentNode.classList.add('selected');
                }
                this.user = activeEl.innerText;
            },

            // controls the arrow up key on typeahead suggestions
            focusUp() {
                firstItem = document.querySelector('.Search-typeahead--item');
                input = document.querySelector('.Search-typeahead--field');
                const activeEl = document.activeElement;

                console.log(firstItem);
                if (firstItem.className.includes('selected')) {
                    activeEl.parentNode.classList.remove('selected');
                    input.focus();
                    // eslint-disable-next-line
                    this.user = this.user.split('/')[0];
                } else {
                    activeEl.parentNode.classList.remove('selected');
                    activeEl.parentNode.previousSibling.firstChild.focus();
                    activeEl.parentNode.classList.add('selected');
                    this.user = activeEl.innerText;
                }
            },

            selectItem(e) {
                const repository = e.target.innerText;
                this.user = repository;
                this.$emit('showChart', repository);
            },
        },

        directives: {
            // this custom directive is used to wait 500ms after user's last key interaction and then it will call the github API
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

    .Search-typeahead{
        width: 90%;
        margin: 0 auto 20px;
        padding-top: 20px;
        position: relative;
        text-align: center;
        padding-bottom: 20px;
        border-bottom: color($theme-blue, 200) dotted 1px;
    }

    .Search-typeahead--intro {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .Search-typeahead--field {
        width: 100%;
        padding: 5px 15px;
        line-height: 30px;
        border: color($grey, 400) 1px solid;
        border-radius: 20px;
        display: block;
        font-size: 18px;

        &:focus {
            outline: none;
        }
    }

    .Search-typeahead--list {
        position: absolute;
        z-index: 2;
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        overflow-x: hidden;
        overflow-y: scroll;
        max-height: 200px;
        border: 1px color($grey, 200) solid;
        border-radius: 0 0 10px 10px ;
        background-color: color($white);
    }

    .Search-typeahead--item {
        padding: 15px;
        border-bottom: 1px color($grey, 50) solid;
    }

    .selected,
    .Search-typeahead--item:hover {
        background-color: color($theme-red, 50);
    }


    @media screen and (min-width: 768px) {
        .Search-typeahead{
            width: 70%;
            padding-top:10%;
        }

        .Search-typeahead--intro {
            font-size: 24px;
        }
    }

    @media screen and (min-width: 1024px) {
        .Search-typeahead{
            width: 60%;
            padding-top:5%;
        }
    }

    @media screen and (min-width: 1366px) {
        .Search-typeahead{
            width: 50%;
        }
    }

</style>
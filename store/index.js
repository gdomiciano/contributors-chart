import Vuex from 'vuex';

const store = () => new Vuex.Store({
    state: {
        repoList: null,
        chartInfo: null,
    },

    mutations: {
        GET_REPO_LIST(state, model) {
            this.state.repoList = model;
        },
        GET_CHART_INFO(state, model) {
            this.state.chartInfo = model;
        },
    },

    actions: {
        async getRepoList({ commit }, user) {
            // https://api.github.com/users/angular/repos
            this.$axios.setHeader('Accept', 'application/vnd.github.v3+json');
            const data = await this.$axios.$get(`https://api.github.com/users/${user}/repos`);
            if (data) {
                commit('GET_REPO_LIST', data);
            }
        },
        async getChartInfo({ commit }, params) {
            // https://api.github.com/repos/angular/angular/contributors
            const data = await this.$axios.$get(`https://api.github.com/repos/${params.user}/${params.repo}/contributors`);
            if (data) commit('GET_CHART_INFO', data);
        },
    },
});

export default store;

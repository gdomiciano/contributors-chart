import Vuex from 'vuex';

const store = () => new Vuex.Store({
    state: {
        repoList: null,
        chartInfo: null,
        error: null,
    },

    mutations: {
        GET_REPO_LIST(state, model) {
            this.state.error = null;
            this.state.repoList = model;
        },
        GET_CHART_INFO(state, model) {
            this.state.chartInfo = model;
        },
        SET_ERROR(state, model) {
            this.state.repoList = null
            this.state.error = model;
        },
    },

    actions: {
        async getRepoList({ commit }, user) {
            this.$axios.setHeader('Accept', 'application/vnd.github.v3+json');
            try {
                const data = await this.$axios.$get(`https://api.github.com/users/${user}/repos`);
                if (data.length > 0) {
                    commit('GET_REPO_LIST', data);
                } else {
                    commit('SET_ERROR', `${user} has no repositories.`);
                }
            } catch (error) {
                commit('SET_ERROR', 'User not found.');
            }
        },

        async getChartInfo({ commit }, params) {
            // https://api.github.com/repos/angular/angular/contributors
            const data = await this.$axios.$get(`https://api.github.com/repos/angular/angular/contributors`);
            // const data = await this.$axios.$get(`https://api.github.com/repos/${params.user}/${params.repo}/contributors`);
            if (data) {
                commit('GET_CHART_INFO', data)
            } else {
                console.log('chart', data)
            }
        },
    },
});

export default store;

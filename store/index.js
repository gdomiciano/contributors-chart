export const state = () => ({
    repoList: null,
    chartInfo: null,
    error: null,
    repoName: ''
});

export const getters = {
    repoList: (state) => state.repoList,
    chartInfo: (state) => state.chartInfo,
    message: (state) => state.error,
    repositoryName: (state) => state.repoName,
};

export const mutations = {
    SET_REPO_LIST(state, model) {
        state.error = null;
        state.repoList = model;
    },

    SET_REPO_NAME (state, name) {
        state.repoName = name.split('/')[1]
    },

    SET_CHART_INFO(state, model) {
        state.repoList = null;
        // generate data obj structure
        const info = {
            labels: [],
            datasets: [{
                label: 'User Contributions',
                backgroundColor: '#AF3C34',
                data: [],
                barPercentage: 1.0,
            }],
        };

        model.forEach((contrib) => {
            info.labels.push(contrib.login);
            info.datasets[0].data.push(contrib.contributions);
        });
        state.chartInfo = info;
    },

    SET_ERROR(state, model) {
        state.repoList = null;
        state.chartInfo = null;
        state.error = model;
    },
};

export const actions = {
    async getRepoList({ commit }, user) {
        this.$axios.setHeader('Accept', 'application/vnd.github.v3+json');
        try {
            const data = await this.$axios.$get(`https://api.github.com/users/${user}/repos`);
            if (data.length > 0) {
                commit('SET_REPO_LIST', data);
            } else {
                commit('SET_ERROR', `${user} has no repositories.`);
            }
        } catch (error) {
            commit('SET_ERROR', 'User not found.');
        }
    },

    async getChartInfo({ commit }, repo) {
        this.$axios.setHeader('Accept', 'application/vnd.github.v3+json');
        const data = await this.$axios.$get(`https://api.github.com/repos/${repo}/contributors`);
        if (data) {
            commit('SET_REPO_NAME', repo);
            commit('SET_CHART_INFO', data);
        } else {
            console.log('chart', data);
        }
    },
};

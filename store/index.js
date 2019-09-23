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
    state.repoName = name.split('/')[1];
  },

  SET_CHART_INFO(state, model) {
    state.repoList = null;
    // generate data obj structure
    const info = {
      labels: [],
      datasets: [{
        label: 'User Contributions',
        backgroundColor: () => {
          const red = Math.floor(Math.random() * Math.floor(255))
          const blue = Math.floor(Math.random() * Math.floor(255))
          const green = Math.floor(Math.random() * Math.floor(255))
          const alpha = Math.random() * (1 - 0.5) + 0.5
          return `rgba(${red},${blue},${green},${alpha})`
        },
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
    try {
      const data = await this.$axios.$get(`https://api.github.com/users/${user}/repos`);
      console.log('get repo list', data)
      if (data.length > 0) {
        commit('SET_REPO_LIST', data);
      } else {
        commit('SET_ERROR', `${user} has no repositories.`);
      }
    } catch (error) {
      if (error.response.status === 403) {
        commit('SET_ERROR', 'API rate limit exceeded, try again in one hour');
      } else {
        commit('SET_ERROR', 'User not found.');
      }
    }
  },

  async getChartInfo({ commit }, repo) {
    try {
      const data = await this.$axios.$get(`https://api.github.com/repos/${repo}/contributors`);
      commit('SET_REPO_NAME', repo);
      commit('SET_CHART_INFO', data);
      console.log('get contributors', data  )
    } catch(error) {
      console.error('chart', error);
    }
  },
};

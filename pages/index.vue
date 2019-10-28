<template>
  <section class="container">
    <div>
      <p>
        {{ $t('languages') }}:
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </p>
      <search @showChart="getInfo" />
      <error
        v-if="message"
        :message="message"
      />
      <chart v-if="chartInfo" />
    </div>
  </section>
</template>

<script>
import Search from '@/components/Search.vue';
import Error from '@/components/Error';
import Chart from '@/components/Chart';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Search,
    Error,
    Chart,
  },

  data() {
    return {
      repository: null,
    };
  },

  computed: {
    ...mapGetters([
      'message',
      'chartInfo',
    ]),
    availableLocales () {
      return this.$i18n.locales
    }
  },

  methods: {
    ...mapActions([
      'getChartInfo',
    ]),

    async getInfo(repository) {
      await this.getChartInfo(repository.trim());
    },
  },
};
</script>
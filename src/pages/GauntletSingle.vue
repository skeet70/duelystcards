<template>
  <div v-if="loading">
    <h1>LOADING DATA</h1>
  </div>
  <div v-else class="gauntlet-page container">
    <div class="gauntlet-content">
      <div :class="['inner', background]">
        <gauntlet-header :gauntlet="gauntlet" />
        <match-table :matches="gauntlet.matches" />
        <rarity-pie-chart />
      </div>
    </div>
    <div class="gauntlet-deck-column">
      <gauntlet-deck-container />
    </div>
  </div>
</template>

<script>
  import GauntletHeader from 'components/gauntlet/GauntletHeader'
  import MatchTable from 'components/gauntlet/MatchTable'
  import GauntletDeckContainer from 'components/gauntlet/GauntletDeckContainer'
  import RarityPieChart from 'components/gauntlet/RarityPieChart'
  import { mapActions, mapState } from 'vuex'

  export default {
    data() {
      return {
        loading: true,
      };
    },

    computed: {
      ...mapState({
        gauntlet: ({ gauntlet }) => gauntlet.currentGauntlet,
      }),

      background () {
        return `bg-${this.gauntlet.generalId}`
      },
    },

    methods: {
      ...mapActions(['getGauntlet', 'resetAll']),

      async fetchData () {
        if (this.gauntlet && this.gauntlet._id === this.$route.params.id) this.loading = false
        await this.getGauntlet(this.$route.params.id)
        this.loading = false
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    beforeRouteLeave (to, from, next) {
      this.resetAll();
      next();
    },

    components: {
      GauntletHeader,
      MatchTable,
      GauntletDeckContainer,
      RarityPieChart,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .bg-501::after, .bg-527::after { background: url('../assets/images/crest_vanar.png'); }
  .bg-401::after, .bg-418::after { background-image: url('../assets/images/crest_magmar.png'); }
  .bg-301::after, .bg-323::after { background-image: url('../assets/images/crest_abyssian.png'); }
  .bg-201::after, .bg-223::after { background-image: url('../assets/images/crest_vetruvian.png'); }
  .bg-101::after, .bg-123::after { background-image: url('../assets/images/crest_songhai.png'); }
  .bg-1::after, .bg-23::after { background-image: url('../assets/images/crest_lyonar.png'); }

  .gauntlet-page {
    display: flex;
  }

  .gauntlet-content {
    flex-grow: 1;
    height: calc(100vh - #{$height-site-header-spacing});
    overflow-y: scroll;

    > .inner {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;

      &::after {
        content: "";
        background-repeat: no-repeat;
        background-position: 50% 0;
        opacity: 0.1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: -1;
        filter: grayscale(100%);
      }
    }
  }

  .gauntlet-deck-column {
    flex: 0 0 $width-drawer-deck;
  }

</style>
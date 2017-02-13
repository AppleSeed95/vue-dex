<template>
  <section class="section section-overview">
    <div class="container">
      <h1 class="section_title">Overview</h1>
      <div class="columns">
        <overview-stage v-if="showStage" @switch-overview="switchView" :stageUrlStage="stageUrl" :stageIdStage="stageId"></overview-stage>
        <overview-pokemon v-if="showPokemon" @switch-overview="switchView"></overview-pokemon>
      </div>
    </div>
  </section>
</template>

<script>
import OverviewStage from 'components/OverviewStage.vue'
import OverviewPokemon from 'components/OverviewPokemon.vue'
import * as Resources from './../resources'

import bus from './../bus'

export default {
  data () {
    return {
      viewIsPokemon: false,
      screenMode: '',
      stageUrl: '',
    }
  },
  props: ['stageId'],
  methods: {
    switchView() {
      this.viewIsPokemon = !this.viewIsPokemon
    },
    calculateScreensize(event) {
      let width = document.documentElement.clientWidth
      if (width <= 768) {
        this.screenMode = 'tablet'
      } else {
        this.screenMode = 'desktop'
      }
    },
    updateOverview() {
      this.stageUrl = Resources.getStageUrl(this.stageId)
      console.log('section overview current stage url ', this.stageUrl)
    }
  },
  computed: {
    showStage () {
      if (this.screenMode == 'desktop') {
        return true
      } else {
        if (!this.viewIsPokemon) {
          return true
        }
        return false
      }
    },
    showPokemon () {
      if (this.screenMode == 'desktop') {
        return true
      } else {
        if (this.viewIsPokemon) {
          return true
        }
        return false
      }
    }
  },
  components: {
    OverviewStage,
    OverviewPokemon
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.calculateScreensize);
      this.calculateScreensize()

      bus.$on('update', this.updateOverview)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_all.scss";

.section {
  background: $pal-white;
}

</style>

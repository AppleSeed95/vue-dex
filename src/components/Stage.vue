<template>
  <div class="stage">
    <section-overview :stageData="stageData"></section-overview>
    <section-disruptions :stageId="stageIdApp"></section-disruptions>
    <section-strategy :stageId="stageIdApp"></section-strategy>
    <section-supports :stageId="stageIdApp"></section-supports>
  </div>
</template>

<script>
import SectionOverview from 'components/SectionOverview.vue'
import SectionDisruptions from 'components/SectionDisruptions.vue'
import SectionStrategy from 'components/SectionStrategy.vue'
import SectionSupports from 'components/SectionSupports.vue'

import _ from 'lodash'
import * as Processor from './../processor'
import * as Resources from './../resources'

export default {
  data () {
    return {
      stageUrlStage: '',
      stageData: {}
    }
  },
  components: {
    SectionOverview,
    SectionDisruptions,
    SectionStrategy,
    SectionSupports
  },
  watch: {
    stageIdApp() {
      this.getUrlFromId()
      this.updateStageData()
    }
  },
  props: ['stageIdApp', 'stageUrlApp'],
  methods: {
    updateStageData: _.debounce(function () {
      let processorConfig = {
        url: this.stageUrlStage,
        id: this.stageIdApp
      }
      Processor.getStage(processorConfig).then((data) => {
        if (data) {
          this.stageData = data
          let sranking = data.srankingStrategy
          let srankMoves = sranking.match(/\d+/g, '')[0]
          this.stageData.srankMoves = srankMoves

          console.log(this.stageData);
        } else {
          console.log('encountered error when getting stage')
        }
      })
      console.log('stage data: ', this.stageData);
    }, 1000),
    getUrlFromId () {
      this.stageUrlStage = Resources.getStageUrl(1, this.stageIdApp)
    }
  },
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_variables.scss";

</style>

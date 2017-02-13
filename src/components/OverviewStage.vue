<template>
  <div class="column card card-overview card-overview-stage is-6">
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <img :src="stageLayout" alt="stage view" class="stage_view">
      </div>
      <button class="modal-close"></button>
    </div>
    <h2>Stage {{ stageNumber }}</h2>
    <div class="stage_supportLimit stage_supportLimit-4"></div>
    <div class="card_tag">
      Stage Info
    </div>
    <div class="card_tag card_tag-switch is-hidden-desktop" @click="switchView">Switch To Pokemon Info</div>
    <div class="columns">
      <div class="column is-7">
        <div class="glances">
          <div class="glance glance-hp">
            <strong>Hit Points</strong>
            <span>{{ stageHP }}</span>
          </div>
          <div class="glance glance-moves">
            <strong>Moves</strong>
            <span>{{ stageMoves }}</span>
          </div>
          <div class="glance glance-sranks">
            <strong>S-Ranks</strong>
            <span>{{ `${stageSRank} / ${stageMoves}` }}</span>
          </div>
          <div class="glance glance-layout">
            <strong>Click for starting board</strong>
          </div>
        </div>
      </div>
      <div class="column stage_visuals">
        <img :src="stageLayout" alt="stage view" class="stage_view">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import * as api from './../api'
import * as Resources from './../resources'

import bus from './../bus'

export default {
  data () {
    return {
      stageLayout: 'http://i.imgur.com/YMR571b.png',
      stageHP: '',
      stageMoves: '?',
      stageSRank: '?',
      stageSupportLim: '',
    }
  },
  props: ['stageIdStage'],
  watch: {
    stageNumber (newId) {
      this.getStageHP()
    }
  },
  computed: {
    stageNumber () {
      return this.stageIdStage
    },
  },
  methods: {
    switchView() {
      this.$emit('switch-overview')
    },
    getStageHP: _.debounce(
      () => {
        let self = this
        let stageUrl = Resources.getStageUrl(self.stageNumber)
        api.get(stageUrl)
          .then(resp => {
            console.log('api get ', resp);
            let stage = _.find(resp.body, (stageObj) => {
              return stageObj.stageNo == self.stageNumber
            })
            console.log(stage.hitPts)
            self.stageHP = stage.hitPts
          })
      }, 500
    )
  },
  mounted () {
    // bus.$on('update', this.updateStageHP)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

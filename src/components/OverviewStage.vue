<template>
  <div class="column card card-overview card-overview-stage is-6">
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <img :src="layout" alt="stage view" class="stage_view">
      </div>
      <button class="modal-close"></button>
    </div>
    <h2>Stage {{ number }}</h2>
    <div :class="['stage_supportLimit', supportLim == '4' ? 'stage_supportLimit-4' : 'stage_supportLimit-3']"></div>
    <div class="card_tag">
      Stage Info
    </div>
    <div class="card_tag card_tag-switch is-hidden-desktop" @click="switchView">Switch To Pokemon Info</div>
    <div class="columns">
      <div class="column is-7">
        <div class="glances">
          <div class="glance glance-hp">
            <strong>Hit Points</strong>
            <span>{{ hitPts }}</span>
          </div>
          <div class="glance glance-moves">
            <strong>Moves</strong>
            <span>{{ moves }}</span>
          </div>
          <div class="glance glance-sranks">
            <strong>S-Ranks</strong>
            <span>{{ `${sRank} / ${moves}` }}</span>
          </div>
          <div class="glance glance-layout">
            <strong>Click for starting board</strong>
          </div>
        </div>
      </div>
      <div class="column stage_visuals">
        <img :src="layout" alt="stage view" class="stage_view">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import * as api from './../api'
import * as Resources from './../resources'
import * as Processor from './../processor'

import bus from './../bus'

export default {
  data () {
    return {
      number: '?',
      layout: 'http://i.imgur.com/YMR571b.png',
      moves: '?',
      sRank: '?',
      hitPts: '?',
      supportLim: ''
    }
  },
  props: ['stageData'],
  watch: {
    stageData() {
      this.updateStageNo()

      this.updateHP()
      this.updateMoves()
      this.updateSRanks()
      this.updateLayout()
      this.updateSupportLim()
    }
  },
  methods: {
    switchView() {
      this.$emit('switch-overview')
    },
    updateStageNo() {
      this.number = this.stageData.stageNo
    },
    updateHP() {
      this.hitPts = this.stageData.hitPts
    },
    updateMoves() {
      this.moves = this.stageData.moves
    },
    updateSRanks() {
      this.sRank = this.stageData.srankMoves
    },
    updateLayout() {
      this.layout = this.stageData.initialBoardSetup
    },
    updateSupportLim() {
      this.supportLim = this.stageData.pokemon
    }
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

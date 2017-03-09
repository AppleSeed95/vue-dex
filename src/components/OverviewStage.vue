<template>
  <div class="column card card-overview card-overview-stage is-6">
    <div class="modal" :class="modalOpened ? 'show' : ''">
      <div class="modal-background"></div>
      <div class="modal-content">
        <img :src="layout" alt="stage view" class="stage_view">
      </div>
      <button class="modal-close" @click="closeModal"></button>
    </div>
    <h2>Stage {{ number }}</h2>
    <div :class="['stage_supportLimit', parseInt(supportLim) >= 4 ? 'stage_supportLimit-4' : 'stage_supportLimit-3']"></div>
    <div class="card_tag">
      Stage Info
    </div>
    <div class="card_tag card_tag-switch is-hidden-desktop" @click="switchView">Switch To Pokemon Info</div>
    <div class="columns">
      <div class="column is-7">
        <div class="glances">
          <div v-if="requirements > 1" class="glance glance-reqs">
            <strong>Requirements</strong>
            <span>{{ requirements }} S-Ranks</span>
          </div>
          <div class="glance glance-hp">
            <strong>Hit Points</strong>
            <span>{{ hitPts }}</span>
          </div>
          <div class="glance glance-moves">
            <strong>{{ this.time.length > 1 ? 'Time' : 'Moves' }}</strong>
            <span>{{ this.time.length > 1 ? time : moves }}</span>
          </div>
          <div class="glance glance-sranks">
            <strong>S-Ranks</strong>
            <span>{{ this.time.length > 1 ? `${sRank}s` : `${sRank} / ${moves}` }}</span>
          </div>
          <div class="glance glance-layout">
            <strong @click="openModal">Click for starting board</strong>
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

export default {
  data () {
    return {
      number: '?',
      layout: '/static/img/pikachu-angry.svg',
      moves: '?',
      time: '?',
      sRank: '?',
      hitPts: '?',
      supportLim: '',
      requirements: '?',
      modalOpened: false
    }
  },
  props: ['stageData'],
  watch: {
    stageData() {
      this.updateStageNo()
      this.updateRanksRequirements()
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
      this.moves = '?'
      this.time = '?'
      if (this.stageData.moves) {
        this.moves = this.stageData.moves
      }
      if (this.stageData.time) {
        this.time = this.stageData.time
      }
    },
    updateRanksRequirements() {
      this.requirements = ''
      if (this.stageData.srank) {
        console.log('srank reqs: ', this.stageData.srank)
        this.requirements = _.parseInt(this.stageData.srank)
      }
    },
    updateSRanks() {
      this.sRank = this.stageData.srankMoves
    },
    updateLayout() {
      this.layout = this.stageData.initialBoardSetup
    },
    updateSupportLim() {
      this.supportLim = this.stageData.pokemon
    },
    openModal() {
      this.modalOpened = true
    },
    closeModal() {
      this.modalOpened = false
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

.modal {
  &.show {
    display: block;
  }

  &-content {
    margin: 20px auto;
    width: calc(100% - 20px);
  }

  &-close {
    background-color: transparentize($pal-black, 0.7);
  }
}

</style>

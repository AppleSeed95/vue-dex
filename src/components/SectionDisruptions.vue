<template>
  <section class="section section-disruptions">
    <div class="container">
      <h1 class="section_title">Disruptions</h1>
      <div class="columns section_wrapper">
        <disruptions-card :disruptions="disruptionBoard" :variations="disruptionBoardVariations" disruption-title="Board" class="is-hidden-touch"></disruptions-card>
        <disruptions-card :disruptions="disruptionInitial" :variations="disruptionInitialVariations" disruption-title="Initial"  class="is-hidden-touch"></disruptions-card>
        <disruptions-card :disruptions="disruptionTimer" :variations="disruptionTimerVariations" disruption-title="Timer"  class="is-hidden-touch"></disruptions-card>
        <disruptions-card :disruptions="disruptionCondition" :disruptionsTrigger="disruptionConditionTrigger" disruption-title="Conditional" class="is-hidden-touch"></disruptions-card>
        <disruptions-card-group class="is-hidden-desktop"
        :disruption-board="disruptionBoard"
        :disruption-board-variations="disruptionBoardVariations"
        :disruption-initial="disruptionInitial"
        :disruption-initial-variations="disruptionInitialVariations"
        :disruption-timer="disruptionTimer"
        :disruption-timer-variations="disruptionTimerVariations"
        :disruption-condition="disruptionCondition" :disruption-condition-trigger="disruptionConditionTrigger"></disruptions-card-group>
      </div>
      <div class="section_ftr addedSupp">
        <div class="addedSupp_header">Added Support</div>
        <div class="addedSupp_content">
          <img :src="disruptionSupport ? disruptionSupport.pokemonIcon : './static/img/sprites/icon_01.png'" alt="added support">
          <div :style="{marginLeft: '10px'}">{{ disruptionSupportReplace }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DisruptionsCard from 'components/DisruptionsCard.vue'
import DisruptionsCardGroup from 'components/DisruptionsCardGroup.vue'
import * as Processor from './../processor'

export default {
  data () {
    return {
      disruptionBoard: [],
      disruptionInitial: [],
      disruptionTimer: [],
      disruptionCondition: null,
      disruptionConditionTrigger: null,
      disruptionBoardVariations: [],
      disruptionInitialVariations: [],
      disruptionTimerVariations: [],
      disruptionSupport: null,
      disruptionSupportReplace: null,
    }
  },
  watch: {
    stageData() {
      this.updateDisruptions()
    }
  },
  components: {
    DisruptionsCard,
    DisruptionsCardGroup
  },
  props: ['stageData'],
  methods: {
    updateDisruptions() {
      let disruptionsCollection = _.compact(_.split(this.stageData.disruptions, '\n'))
      let disruptionBoard = '', disruptionInitial = '', disruptionTimer = '', disruptionCond = '', disruptionCondTrigger = ''

      console.log(disruptionsCollection)

      _.map(disruptionsCollection, (line) => {
        if (_.includes(_.toLower(line), 'board:') && line.length > line.indexOf(':')) {
          if (!_.includes(line, '/')) {
            disruptionBoard = _.trim(line.substring(line.indexOf(':') + 1, line.length))
          } else {
            // this.disruptionBoardVariations = true
          }
          this.disruptionBoard = _.split(disruptionBoard, '.')
        }
        if (_.includes(_.toLower(line), 'initial:') && line.length > line.indexOf(':')) {
          if (!_.includes(line, '/')) {
            disruptionInitial = _.trim(line.substring(line.indexOf(':') + 1, line.length))
          }
          this.disruptionInitial = _.split(disruptionInitial, '.')
        }
        if (_.includes(_.toLower(line), 'timer:') && line.length > line.indexOf(':')) {
          disruptionTimer = _.trim(line.substring(line.indexOf(':') + 1, line.length))
          if (!_.includes(line, '/')) {
            this.disruptionTimer = _.split(disruptionTimer, '.')
          } else {
            this.disruptionTimer = _.split((disruptionTimer.match(/\:(.*?)\:/g) || 'Any of the following: '), '.')
            this.disruptionTimerVariations = _.split(disruptionTimer.slice(disruptionTimer.lastIndexOf(':') + 1, disruptionTimer.length), '/')
          }
        }
        if (_.includes(_.toLower(line), 'support:') || _.includes(_.toLower(line), 'added:')) {
          let addedSupport = _.trim(_.split(line, '.')[0].slice(line.indexOf(':') + 1, line.length))
          this.disruptionSupportReplace = _.split(line, '.')[1]

          let configSupport = {name: addedSupport || '', isMega: false, separateDivision: ''}

          Processor.getStagePokemon(configSupport).then(data => {
            if (data) {
              this.disruptionSupport = data
            }
          })
        }

        if (this.checkHasKey(line, ['moves:', 'turn:', 'health:', '%:', 'hp:'])) {
          disruptionCond = _.trim(_.split(line, ':')[1])
          disruptionCondTrigger = _.trim(_.split(line, ':')[0])
          this.disruptionConditionTrigger = disruptionCondTrigger
          this.disruptionCondition = _.split(disruptionCond, '.')
        }
      })

      /*
      console.log('disruption board: ', this.disruptionBoard)
      console.log('disruption timer: ', this.disruptionTimer)
      console.log('disruption timer variations: ', this.disruptionTimerVariations)
      console.log('disruption condition start: ', this.disruptionConditionTrigger)
      console.log('disruption condition content: ', this.disruptionCondition)
      */

    },
    checkHasKey(string, phrases) {
      return phrases.some(phrase => _.toLower(string).includes(_.toLower(phrase)))
    }
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

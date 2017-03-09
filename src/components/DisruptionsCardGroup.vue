<template>
  <div class="column card card-disruptions card-disruptions-group">
    <div class="card_hdr">Disruptions</div>
    <div class="columns card_tabs is-mobile">
      <div v-for="mode, index in disruptionModes" :class="['column is-gapless', isCurrentMode(mode)]" @click="switchMode(index)">{{ mode }}</div>
    </div>
    <div :class="[currentMode == 'Board' ? 'show' : '' ,'container card_body']">
      <ul class="disruptions">
        <li v-for="disruption in disruptionBoard">{{ capitalize(disruption) }}</li>
        <li v-if="disruptionBoardVariations && disruptionBoardVariations.length > 0"> {{ 'Any of the following:' }}
          <ul>
            <li v-for="variation in disruptionBoardVariations"> {{ variation }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="[currentMode == 'Initial' ? 'show' : '' ,'container card_body']">
      <ul class="disruptions">
        <li v-for="disruption in disruptionInitial">{{ capitalize(disruption) }}</li>
        <li v-if="disruptionInitialVariations && disruptionInitialVariations.length > 0"> {{ 'Any of the following:' }}
          <ul>
            <li v-for="variation in disruptionInitialVariations"> {{ variation }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="[currentMode == 'Timer' ? 'show' : '' ,'container card_body']">
      <ul class="disruptions">
        <li v-for="disruption in disruptionTimer">{{ capitalize(disruption) }}</li>
        <li v-if="disruptionTimerVariations & disruptionTimerVariations.length > 0"> {{ 'Any of the following:' }}
          <ul>
            <li v-for="variation in disruptionTimerVariations"> {{ variation }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="[currentMode == 'Condition' ? 'show' : '' ,'container card_body']">
      <ul class="disruptions">
        <li v-if="disruptionConditionTrigger"> <strong>Condition:</strong> {{ disruptionConditionTrigger }}</li>
        <li v-for="disruption in disruptionCondition">{{ capitalize(disruption) }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      disruptionModes: ['Board', 'Initial', 'Timer', 'Condition'],
      disruptionModeActive: 0
    }
  },
  props: ['disruptionBoard', 'disruptionInitial', 'disruptionTimer', 'disruptionCondition', 'disruptionConditionTrigger', 'disruptionBoardVariations', 'disruptionInitialVariations', 'disruptionTimerVariations'],
  computed: {
    currentMode (mode) {
      return this.disruptionModes[this.disruptionModeActive]
    }
  },
  methods: {
    switchMode(mode) {
      this.disruptionModeActive = mode
    },
    isCurrentMode(mode) {
      return mode == this.currentMode ? 'is-active' : ''
    },
    capitalize(string) {
      return _.upperFirst(string)
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

.card_body {
  display: none;

  &.show {
    display: block;
  }
}

</style>

<template>
  <div class="column card card-disruptions card-disruptions-group">
    <div class="card_hdr">Disruptions</div>
    <div class="columns inactiveModes is-mobile">
      <div v-for="mode, index in disruptionModes" :class="['column is-gapless', isCurrentMode(mode)]" @click="switchMode(index)">{{ mode }}</div>
    </div>
    <div class="container card_body" v-if="currentMode == 'Board'">
      <ul class="disruptions">
        <li>Mode is Board now</li>
        <li>Any of the following
          <ul>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="container card_body" v-if="currentMode == 'Initial'">
      <ul class="disruptions">
        <li>Mode is Initial</li>
        <li>Any of the following
          <ul>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="container card_body" v-if="currentMode == 'Timer'">
      <ul class="disruptions">
        <li>Mode is Timer now</li>
        <li>Any of the following
          <ul>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="container card_body" v-if="currentMode == 'Conditional'">
      <ul class="disruptions">
        <li>Mode is Conditional now</li>
        <li>Any of the following
          <ul>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      disruptionModes: ['Board', 'Initial', 'Timer', 'Conditional'],
      disruptionModeActive: 0
    }
  },
  computed: {
    currentMode (mode) {
      return this.disruptionModes[this.disruptionModeActive]
    },
    inactiveModes() {
      return _.filter(this.disruptionModes, (mode) => {
        return mode != this.currentMode
      })
    }
  },
  methods: {
    switchMode(mode) {
      this.disruptionModeActive = mode
    },
    isCurrentMode(mode) {
      return mode == this.currentMode ? 'is-active' : ''
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

</style>

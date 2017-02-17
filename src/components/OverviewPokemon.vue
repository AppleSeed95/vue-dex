<template>
  <div class="column card card-overview card-overview-pokemon is-5">
    <div class="card_tag">
      Pokemon Info
    </div>
    <div class="card_tag card_tag-switch is-hidden-desktop" @click="switchView">Switch To Stage Info</div>
    <div class="columns">
      <div class="column">
        <h2>{{ name }}
          <div class="stage_pokemonThumbnail" :style="{backgroundImage: pokemonThumbnail}"></div>
        </h2>
        <div class="glances">
          <div class="glance glance-type">
            <strong class="is-pulled-left">Type</strong>
            <span class="is-pulled-right" :style="{color: type.code, fontFamily: 'AvenirHeavy'}">{{ type.name }}</span>
          </div>
          <div class="glance glance-basepower">
            <strong class="is-pulled-left">Base Power</strong>
            <span class="is-pulled-right">{{ basePower }}</span>
          </div>
          <div class="glance glance-ability">
            <strong class="is-pulled-left">Ability</strong>
            <span class="is-pulled-right">{{ ability }}</span>
          </div>
          <div class="glance glance-catchrate">
            <strong class="is-pulled-left">Base Catch Rate</strong>
            <span class="is-pulled-right">{{ captureRate.base }}%</span>
          </div>
          <div class="glance glance-catchrate glance-catchrate-bonus">
            <strong class="is-pulled-left">Bonus Catch Rate</strong>
            <span class="is-pulled-right">{{ `${captureRate.bonus}%/move` }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Processor from './../processor'

export default {
  data () {
    return {
      thumbnail: '01',
      name: '?',
      type: {name: '?', code: ''},
      basePower: '?',
      ability: '?',
      captureRate: {base: '', bonus: ''}
    }
  },
  props: ['stageData'],
  watch: {
    stageData() {
      this.updateName()

      this.updateThumbnail()
      this.updateType()
      this.updateBP()
      this.updateAbility()
      this.updateCaptureRates()
    }
  },
  methods: {
    switchView() {
      this.$emit('switch-overview')
    },
    updateName() {
      this.name = this.stageData.name
    },
    updateThumbnail() {
      this.thumbnail = this.stageData.icon
    },
    updateType() {
      this.type.code = Processor.getTypeColor(this.stageData.type)
      this.type.name = this.stageData.type
    },
    updateBP() {
      this.basePower = this.stageData.basePower
    },
    updateAbility() {
      this.ability = this.stageData.ability
    },
    updateCaptureRates() {
      this.captureRate = Processor.getCaptureRate(this.stageData.captureRate)
    }
  },
  computed: {
    pokemonThumbnail () {
      return `url('./static/img/sprites/icon_${this.thumbnail}.png')`
    }
  },
  mounted () {
    console.log(this.pokemonThumbnail);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

.column {
  text-align: center;
}

</style>

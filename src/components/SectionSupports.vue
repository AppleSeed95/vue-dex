<template>
  <section class="section section-supports">
    <div class="container">
      <h1 class="section_title">Supports</h1>
      <div class="columns">
        <supports-card :slots="slotsMega" supports-title="Mega Slot"></supports-card>
        <supports-card :slots="slotsMain" supports-title="Main Stage"></supports-card>
        <supports-card :slots="slotsExpert" supports-title="Expert Stage"></supports-card>
        <supports-card :slots="slotsSpecial" supports-title="Special Stage"></supports-card>
      </div>
      <h2 class="section_title">Suggested Team</h2>
      <div class="columns parties">
        <supports-party v-if="teamOptimal && teamOptimal.length > 0" :teamData="teamOptimal" party-title="Optimal"></supports-party>
        <supports-party v-if="teamAlt && teamAlt.length > 0" :teamData="teamAlt" party-title="Alternate"></supports-party>
      </div>
    </div>
  </section>
</template>

<script>
import SupportsCard from 'components/SupportsCard.vue'
import SupportsParty from 'components/SupportsParty.vue'

import _ from 'lodash'
import * as Processor from './../processor'

export default {
  data () {
    return {
      teamOptimal: [],
      teamsOther: [],
      teamAlt: [],
      slotsMega: [],
      slotsMain: [],
      slotsExpert: [],
      slotsSpecial: []
    }
  },
  watch: {
    stageData() {
      this.resetData()
      this.updateMegaSlots()
      this.updateOtherSlots()
      this.updateTeam()
    }
  },
  props: ['stageData'],
  components: {
    SupportsCard,
    SupportsParty
  },
  methods: {
    resetData() {
      this.teamOptimal = []
      this.teamsOther = []
      this.teamAlt = []
      this.slotsMega = []
      this.slotsMain = []
      this.slotsExpert = []
      this.slotsSpecial = []
    },
    updateTeam() {
      let teams = _.compact(_.split(this.stageData.suggestedTeam, '\n'))
      let team_1 = _.map(_.compact(_.split(teams.shift(), ',')), _.trim)

      // mega thumbnails
      let configMega = {name: _.trim(this.megaSlot(team_1)) || '', isMega: true, separateDivision: ''}
      Processor.getStagePokemon(configMega).then((data) => {
        this.teamOptimal.push(data)
      })

      // supports thumbnails
      _.each(this.supportSlots(team_1), (support) => {
        let configSupport = {name: _.trim(support) || '', isMega: false, separateDivision: ''}
        Processor.getStagePokemon(configSupport).then(data => {
          this.teamOptimal.push(data)
        })
      })
    },
    updateMegaSlots() {
      let megas = Processor.getMegaSupports(this.stageData.recommendedParty)

      _.each(megas, (mega) => {
        let configSupportMega = {name: mega.slice(1, -1) || '', isMega: true, separateDivision: ''}

        Processor.getStagePokemon(configSupportMega).then(data => {
          if (data) {
            this.slotsMega.push(data)
          }
        })
      })

      console.log('mega slots: ', this.slotsMega)
    },
    updateOtherSlots() {
      let supports = Processor.getOtherSupports(this.stageData.recommendedParty)
      console.log('support choices: ', supports)

      _.each(supports, (support) => {
        let configSupportMain = {name: support || '', isMega: false, separateDivision: 'main'}
        let configSupportExpert = {name: support || '', isMega: false, separateDivision: 'expert'}
        let configSupportSpecial = {name: support || '', isMega: false, separateDivision: 'special'}

        Processor.getStagePokemon(configSupportMain).then(data => {
          if (data) {
            this.slotsMain.push(data)
          }
        })

        Processor.getStagePokemon(configSupportExpert).then(data => {
          if (data) {
            this.slotsExpert.push(data)
          }
        })

        Processor.getStagePokemon(configSupportSpecial).then(data => {
          if (data) {
            this.slotsSpecial.push(data)
          }
        })
      })
      /*
      console.log('main slots: ', this.slotsMain)
      console.log('expert slots: ', this.slotsExpert)
      console.log('special slots: ', this.slotsSpecial)
      */
    },
    megaSlot(teamArr) {
      let target = Processor.getMembers(teamArr)[0]
      if (target) {
        return target.slice(1, -1)
      } else {
        return ''
      }
    },
    supportSlots(teamArr) {
      let supports = _.drop(Processor.getMembers(teamArr))
      return supports
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

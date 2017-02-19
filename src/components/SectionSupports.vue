<template>
  <section class="section section-supports">
    <div class="container">
      <h1 class="section_title">Supports</h1>
      <div class="columns">
        <supports-card supports-title="Mega Slot"></supports-card>
        <supports-card supports-title="Main Stage"></supports-card>
        <supports-card supports-title="Expert Stage"></supports-card>
        <supports-card supports-title="Special Stage"></supports-card>
      </div>
      <h2 class="section_title">Suggested Team</h2>
      <div class="columns parties">
        <supports-party :stageData="stageData" party-title="Optimal"></supports-party>
        <supports-party :stageData="stageData" party-title="Alternate"></supports-party>
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

    }
  },
  watch: {
    stageData() {
      this.updateTeam()
    }
  },
  props: ['stageData'],
  components: {
    SupportsCard,
    SupportsParty
  },
  methods: {
    updateTeam() {
      Processor.getTeams(this.stageData.suggestedTeam)
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

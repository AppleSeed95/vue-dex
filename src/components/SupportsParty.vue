<template>
  <div :class="['column is-4 card card-party', partyIsOptimal ? 'party-optimal' : 'party-alt']">
    <!-- <div class="party_hdr">{{ this.partyTitle }}</div> -->
    <div class="card_tag">{{ this.partyTitle }}</div>
    <div class="card-party_content">
      <div class="card-party_slot card-party_slot-mega">
        <img src="./../assets/img/sprites/icon_09.png" alt="card-party slot">
      </div>
      <div class="card-party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="card-party slot">
      </div>
      <div class="card-party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="card-party slot">
      </div>
      <div class="card-party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="card-party slot">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import * as Processor from './../processor'

export default {
  data () {
    return {

    }
  },
  watch: {
    stageData() {

    }
  },
  props: ['stageData', 'partyTitle'],
  computed: {
    partyIsOptimal () {
      return this.partyTitle == 'Optimal'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

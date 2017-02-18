<template>
  <div class="column card card-strategy card-strategy-clear">
    <div class="card_hdr">{{ stratTitle }}</div>
    <div class="container card_body">
      <p>{{ strat }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      strat: ''
    }
  },
  watch: {
    stageData() {
      this.updateStrat()
    }
  },
  props: ['stratTitle', 'stageData'],
  methods: {
    updateStrat() {
      if (this.stratTitle == 'Clearing') {
        this.strat = this.stageData.clearingStrategy
      }

      if (this.stratTitle == 'S-Ranking') {
        this.strat = this.stageData.srankingStrategy
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

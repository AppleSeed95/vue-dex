<template>
  <section class="section section-overview">
    <div class="container">
      <h1 class="section_title">Strategy</h1>
      <div class="columns">
        <strategy-card :stageData="stageData" strat-title="Clearing"></strategy-card>
        <strategy-card :stageData="stageData" strat-title="S-Ranking"></strategy-card>
      </div>
    </div>
  </section>
</template>

<script>
import StrategyCard from 'components/StrategyCard.vue'

export default {
  data () {
    return {

    }
  },
  props: ['stageData'],
  components: {
    StrategyCard
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

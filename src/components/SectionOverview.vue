<template>
  <section class="section">
    <div class="container">
      <h1 class="section_title">Overview</h1>
      <div class="columns">
        <overview-stage></overview-stage>
      </div>
    </div>
  </section>
</template>

<script>
import OverviewStage from 'components/OverviewStage.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    OverviewStage
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

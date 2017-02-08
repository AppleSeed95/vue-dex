<template>
  <section class="section section-disruptions">
    <div class="container">
      <h1 class="section_title">Disruptions</h1>
      <div class="columns section_wrapper">
        <disruptions-card disruption-title="Board" class="is-hidden-touch"></disruptions-card>
        <disruptions-card disruption-title="Initial" class="is-hidden-touch"></disruptions-card>
        <disruptions-card disruption-title="Timer" class="is-hidden-touch"></disruptions-card>
        <disruptions-card disruption-title="Conditional" class="is-hidden-touch"></disruptions-card>
        <disruptions-card-group class="is-hidden-desktop"></disruptions-card-group>
      </div>
      <div class="section_ftr addedSupp">
        <div class="addedSupp_header">Added Support</div>
        <div class="addedSupp_content">
          <img src="./../assets/img/sprites/icon_01.png" alt="added support">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DisruptionsCard from 'components/DisruptionsCard.vue'
import DisruptionsCardGroup from 'components/DisruptionsCardGroup.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    DisruptionsCard,
    DisruptionsCardGroup
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

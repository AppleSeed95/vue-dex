<template>
  <div class="stage">
    <section-overview></section-overview>
    <section-disruptions></section-disruptions>
    <section-strategy></section-strategy>
    <section-supports></section-supports>
  </div>
</template>

<script>
import SectionOverview from 'components/SectionOverview.vue'
import SectionDisruptions from 'components/SectionDisruptions.vue'
import SectionStrategy from 'components/SectionStrategy.vue'
import SectionSupports from 'components/SectionSupports.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SectionOverview,
    SectionDisruptions,
    SectionStrategy,
    SectionSupports
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_variables.scss";

</style>

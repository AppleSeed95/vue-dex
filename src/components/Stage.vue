<template>
  <div class="stage">
    <section-overview></section-overview>
    <section-disruptions></section-disruptions>
    <section-strategy></section-strategy>
  </div>
</template>

<script>
import SectionOverview from 'components/SectionOverview.vue'
import SectionDisruptions from 'components/SectionDisruptions.vue'
import SectionStrategy from 'components/SectionStrategy.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SectionOverview,
    SectionDisruptions,
    SectionStrategy
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_variables.scss";

</style>

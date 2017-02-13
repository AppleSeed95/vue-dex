<template>
  <div class="stage">
    <section-overview :stageId="stageIdApp"></section-overview>
    <section-disruptions :stageId="stageIdApp"></section-disruptions>
    <section-strategy :stageId="stageIdApp"></section-strategy>
    <section-supports :stageId="stageIdApp"></section-supports>
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
  props: ['stageIdApp'],
  methods: {

  },
  mounted () {
    console.log('Stage passing ID ', this.stageIdApp);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_variables.scss";

</style>

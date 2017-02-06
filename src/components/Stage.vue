<template>
  <div class="stage">
    <section-overview></section-overview>
    <section-disruptions></section-disruptions>
  </div>
</template>

<script>
import SectionOverview from 'components/SectionOverview.vue'
import SectionDisruptions from 'components/SectionDisruptions.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SectionOverview,
    SectionDisruptions
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_variables.scss";

</style>

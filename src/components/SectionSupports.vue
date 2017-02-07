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
        <supports-party party-title="Optimal"></supports-party>
        <supports-party party-title="Alternate"></supports-party>
      </div>
    </div>
  </section>
</template>

<script>
import SupportsCard from 'components/SupportsCard.vue'
import SupportsParty from 'components/SupportsParty.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    SupportsCard,
    SupportsParty
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

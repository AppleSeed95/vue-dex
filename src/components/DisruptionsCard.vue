<template>
  <div class="column card card-disruptions card-disruptions-board">
    <div class="card_hdr">{{ disruptionTitle }}</div>
    <div class="container card_body">
      <ul class="disruptions">
        <li v-if="disruptionsTrigger"> <strong>Condition:</strong> {{ disruptionsTrigger }}</li>
        <li v-for="disruption in disruptions">{{ capitalize(disruption) }}</li>
        <li v-if="variations"> {{ hasVariations ? 'Any of the following:' : '' }}
          <ul>
            <li v-for="variation in variations"> {{ variation }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasVariations: false
    }
  },
  props: ['disruptionTitle', 'disruptions', 'disruptionsTrigger', 'variations'],
  watch: {
    disruptions() {
      this.updateVariations()
    }
  },
  methods: {
    updateVariations() {
      if (_.isArray(this.variations) && this.variations.length > 0) {
        this.hasVariations = true
      }
    },
    capitalize(string) {
      return _.upperFirst(string)
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

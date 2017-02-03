<template>
  <div class="card card-overview card-overviewPokemon">
    <div class="stage_pokemonThumbnail">

    </div>
    <div class="card_tag">

    </div>
    <div class="columns">
      <div class="column">
        <h2>Bulbasaur</h2>
        <div class="glances">
          <div class="glance glance-type">
            <strong class="is-pulled-left">Type</strong>
            <span class="is-pulled-right">Fire</span>
          </div>
          <div class="glance glance-basepower">
            <strong class="is-pulled-left">Base Power</strong>
            <span class="is-pulled-right">60</span>
          </div>
          <div class="glance glance-ability">
            <strong class="is-pulled-left">Ability</strong>
            <span class="is-pulled-right">Dragon Sweep</span>
          </div>
          <div class="glance glance-catchrate">
            <strong class="is-pulled-left">Catch Rate</strong>
            <span class="is-pulled-right">17% + 12%/move</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

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

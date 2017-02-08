<template>
  <div class="column card card-overview card-overview-pokemon is-5">
    <div class="card_tag">
      Pokemon Info
    </div>
    <div class="columns">
      <div class="column">
        <h2>Bulbasaur
          <div class="stage_pokemonThumbnail" :style="{backgroundImage: pokemonThumbnail}"></div>
        </h2>
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
            <strong class="is-pulled-left">Base Catch Rate</strong>
            <span class="is-pulled-right">17%</span>
          </div>
          <div class="glance glance-catchrate glance-catchrate-bonus">
            <strong class="is-pulled-left">Bonus Catch Rate</strong>
            <span class="is-pulled-right">12%/move</span>
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
      thumbnailId: 50
    }
  },
  computed: {
    pokemonThumbnail () {
      return `url('./static/img/sprites/icon_${this.thumbnailId}.png')`
    }
  },
  mounted () {
    console.log(this.pokemonThumbnail);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

.column {
  text-align: center;
}

</style>

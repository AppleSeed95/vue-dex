<template>
  <div :class="['column', 'card card-supports', slotIsMega ? 'card-supports-mega' : '']">
    <div class="card_hdr">{{ this.supportsTitle }}</div>
    <div class="container card_body">
      <ul class="supports columns is-multiline is-mobile">
        <li v-for="slot in slots" class="column is-narrow" :data-attr="`${slot.pokemonName} - stage ${slot.location}`">
          <img :src="slot.pokemonIcon || ''" alt="slot">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    slotIsMega () {
      return this.supportsTitle == 'Mega Slot'
    }
  },
  props: ['supportsTitle', 'slots']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

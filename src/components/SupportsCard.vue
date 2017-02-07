<template>
  <div :class="['column', 'card card-supports', slotIsMega ? 'card-supports-mega' : '']">
    <div class="card_hdr">{{ this.supportsTitle }}</div>
    <div class="container card_body">
      <ul class="supports columns is-multiline">
        <li v-for="index in [1, 2, 3, 4, 5]" class="column is-4">
          <img src="./../assets/img/sprites/icon_01.png" alt="slot">
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
  props: ['supportsTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

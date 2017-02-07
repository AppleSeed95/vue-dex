<template>
  <div :class="['column party is-narrow', partyIsOptimal ? 'party-optimal' : 'party-alt']">
    <div class="party_hdr">{{ this.partyTitle }}</div>
    <div class="party_content">
      <div class="party_slot party_slot-mega">
        <img src="./../assets/img/sprites/icon_09.png" alt="party slot">
      </div>
      <div class="party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="party slot">
      </div>
      <div class="party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="party slot">
      </div>
      <div class="party_slot">
        <img src="./../assets/img/sprites/icon_01.png" alt="party slot">
      </div>
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
    partyIsOptimal () {
      return this.partyTitle == 'Optimal'
    }
  },
  props: ['partyTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_party.scss";

</style>

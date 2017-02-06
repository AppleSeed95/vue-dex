<template>
  <div class="column card card-disruptions card-disruptions-board">
    <div class="card_hdr">{{ this.disruptionTitle }}</div>
    <div class="container card_body">
      <ul class="disruptions">
        <li>Adds a column of Barrier if you don’t make a combo of 4+</li>
        <li>Any of the following
          <ul>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
            <li>Adds 345 blocks if you don't make a combo of 6</li>
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

    }
  },
  props: ['disruptionTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

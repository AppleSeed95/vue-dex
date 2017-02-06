<template>
  <div class="column card card-strategy card-strategy-clear">
    <div class="card_hdr">{{ this.stratTitle }}</div>
    <div class="container card_body">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quisquam consectetur non ullam saepe molestiae quod similique nam, et iste soluta distinctio provident fugit culpa voluptate corporis esse inventore, odio!</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['stratTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "../styles/components/_card.scss";

</style>

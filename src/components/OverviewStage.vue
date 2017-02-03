<template>
  <div class="column card card-overview card-overviewStage is-7">
    <h2>Stage 123</h2>
    <div class="stage_supportLimit stage_supportLimit-4">

    </div>
    <div class="card_tag">
      Stage Info
    </div>
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="glances">
          <div class="glance glance-hp">
            <strong>Hit Points</strong>
            <span>4018</span>
          </div>
          <div class="glance glance-moves">
            <strong>Moves</strong>
            <span>7</span>
          </div>
          <div class="glance glance-sranks">
            <strong>S-Ranks</strong>
            <span>7/15</span>
          </div>
        </div>
      </div>
      <div class="column stage_visuals">
        <img src="http://i.imgur.com/xCN7l0K.png" alt="stage view" class="stage_view">
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

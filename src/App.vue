<template>
<div>
  <div class="container is-fluid" :style="{margin: '0'}">
    <nav class="nav nav-main">
      <!--
              <div class="nav-left">
                  <router-link class="nav-item" to="home">Pokemon Shuffle Guide</router-link>
              </div>
              -->
      <div class="nav-right">
        <router-link class="nav-item" to="home">About</router-link>
      </div>
    </nav>
  </div>
  <div class="container is-fluid">
    <nav class="level nav-stages">
      <div class="level-left">
        <form>Stage
          <span>
                  <input v-model="stageIdApp" class="stagesSelector" type="text" placeholder="1" @keyup.enter.prevent="">
                </span>
        </form>
      </div>
      <div class="level-right">
        <div class="mode">
          <input type="checkbox" id="switch-toggle" value="mode">
          <label for="switch-toggle"></label>
          <h2 class="modeIndicator modeIndicator-main">Main</h2>
          <h2 class="modeIndicator modeIndicator-expert">Expert</h2>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">
    <!-- STAGE COMPONENT -->
    <stage :stageIdApp="this.stageIdApp" :stageUrlApp="this.stageUrl"></stage>
  </div>
  <footer class="footer" :style="{padding: '3rem 1.5rem'}">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Built by <strong>Shelune</strong>. With <a href="http://bulma.io/">Bulma</a> & <a href="https://vuejs.org/">Vue</a>. And love.
        </p>
        <p>
          <a class="icon" href="https://github.com/shelune/vue-shuffle-dex">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import _ from 'lodash'

import {router} from './main'
import Stage from 'components/Stage.vue'
import * as Resources from './resources'
import bus from './bus.js'

export default {
  data() {
    return {
      stageIdApp: 0,
      stageUrl: ''
    }
  },
  components: {
    Stage
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">@import "./styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "./styles/components/_all.scss";

html {
    font-size: 16px;
}

body {
    font-family: 'AvenirRoman', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: $pal-white;
}

.nav {
    .nav-item {
        padding: 0;
        &:hover {
            color: $pal-red;
        }
    }
}

.nav-right {
    margin-right: 40px;
}
@include mobile() {
    .nav-right {
        margin-right: 20px;
    }

    .nav-right {
        align-self: center;

        .nav-item {
            justify-content: flex-end;
        }
    }
}
</style>

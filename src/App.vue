<template>
    <div>
        <div class="container is-fluid" :style="{margin: '0'}">
          <nav class="level nav-main">
              <div class="level-left" :style="{marginLeft: '40px'}">
                  <router-link to="home">Pokemon Shuffle Guide</router-link>
              </div>
              <div class="level-right" :style="{marginRight: '40px'}">
                <router-link to="home">About</router-link>
              </div>
          </nav>
        </div>
        <div class="container is-fluid" :style="{margin: '0'}">
          <nav class="level nav-stages">
            <div class="level-left" :style="{marginLeft: '40px'}">
              <form>Stage
                <span><input class="stagesSelector" type="text" id="stageId" placeholder="1"></span>
              </form>
            </div>
            <div class="level-right" :style="{marginRight: '40px'}">
              <div class="mode">
                <input type="checkbox" id="switch-toggle">
                <label for="switch-toggle"></label>
                <h2 class="modeIndicator-main">Main</h2>
                <h2 class="modeIndicator-expert">Expert</h2>
              </div>
            </div>
          </nav>
        </div>
        <div class="container">
            <!-- STAGE COMPONENT -->
            <stage></stage>
        </div>
        <hr>
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

import { router } from './main'
import Stage from 'components/Stage.vue'

export default {
    data () {
      return {}
    },
    components: {
      Stage
    },
    methods: {

    }
}
</script>

<style lang="scss">

@import "./styles/_variables.scss";
@import "~bulma/bulma.sass";
@import "./styles/components/_header.scss";

html {
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

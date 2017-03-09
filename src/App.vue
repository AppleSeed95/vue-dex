<template>
<div>
  <div class="container is-fluid" :style="{margin: '0'}">
    <nav class="nav nav-main">
      <div class="nav-right">
        <router-link class="nav-item" to="home">About</router-link>
      </div>
    </nav>
  </div>
  <div class="container is-fluid" :style="[stickUp ? stickyStyling : null, {margin: '0'}]">
    <nav class="level nav-stages">
      <div class="level-left">
        <form>Stage
          <span class="eac">
            <input id="stage-selector" v-model="stageIdApp" class="stagesSelector" type="text" placeholder="1" @keyup.enter.prevent="submit">
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
    <!-- <router-view></router-view> -->
    <stage :stageIdApp="this.stageIdApp" :stageUrlApp="this.stageUrl"></stage>
  </div>
  <footer class="footer" :style="{padding: '30px 0 0 0'}">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Built by <strong>Shelune</strong>. With <a href="http://bulma.io/">Bulma</a> & <a href="https://vuejs.org/">Vue</a>.
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
import $ from 'jquery'
import easyAutocomplete from 'easy-autocomplete'

import Stage from 'components/Stage.vue'
import * as Resources from './resources'

export default {
  data() {
    return {
      stageIdApp: 0,
      stageUrl: '',
      stickUp: false,
      stickyStyling: {
        margin: 0,
        position: 'fixed',
        zIndex: 2,
        width: '100%',
        top: 0
      }
    }
  },
  components: {
    Stage
  },
  watch: {

  },
  methods: {
    calculatePosY() {
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      if (scrollTop > 80) {
        this.stickUp = true
      } else {
        this.stickUp = false
      }
    },
    submit() {

    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.calculatePosY);
      this.calculatePosY()
      let self = this

      let options = {
				url: Resources.pokemonCollectionUrl,
				listLocation: "main",
				getValue: "pokemonName",
				list: {
					match: {
						enabled: true
					},
					onClickEvent: function() {
						let stageId = _.parseInt($('#stage-selector').getSelectedItemData()['location'])
            if (isNaN(stageId)) {
              self.stageIdApp = 0
            } else {
              self.stageIdApp = _.trim(_.toString(stageId))
            }
            self.$forceUpdate()
					},
				},
				highlightPhrase: false,
				template: {
          type: "custom",
        		method: function(name, pokemon) {
        			return "<strong>" + name + " </strong> @" + pokemon.location;
        		}
				}
			}

      $('#stage-selector').easyAutocomplete(options)
    })
  }
}
</script>

<style lang="scss">@import "./styles/base/_all.scss";
@import "~bulma/bulma.sass";
@import "./styles/components/_all.scss";
@import "~easy-autocomplete/src/sass/easy-autocomplete.scss";

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

.eac {
  display: inline-block;
  margin-left: 10px;

  input {
    border: none;
    border-radius: 0;
    border-bottom: 3px solid $pal-navy;
    box-shadow: none;
    min-width: 180px;

    @include mobile() {
      min-width: 140px;
    }
  }
}

.easy-autocomplete-container {
  ul {
    border-top: none;
    box-shadow: $shadow-default;
  }

  ul li {
    padding: 10px 12px;
    border: none;

    div {
      @include text-std;
      @include font-size(12px/14);
      text-transform: none;

      strong {
        @include font-size(12px/14);
        font-weight: 700;
      }
    }

    &.selected {
      background: $pal-navy;
      color: $pal-white;

      strong {
        color: $pal-white;
      }
    }
  }
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

// OUTER WRAPPER STAGE //
import Stage from 'components/Stage.vue'

// OVERVIEW SECTION //
import SectionOverview from 'components/SectionOverview.vue'
import OverviewStage from 'components/OverviewStage.vue'
import OverviewPokemon from 'components/OverviewPokemon.vue'

// DISRUPTIONS SECTION //
import SectionDisruptions from 'components/SectionDisruptions.vue'
import DisruptionsCard from 'components/DisruptionsCard.vue'

// STRATEGY SECTION //
import SectionStrategy from 'components/SectionStrategy.vue'
import StrategyCard from 'components/StrategyCard.vue'

// SUPPORTS SECTION //
import SectionSupports from 'components/SectionSupports.vue'
import SupportsCard from 'components/SupportsCard.vue'
import SupportsParty from 'components/SupportsParty.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
/* eslint-disable no-new */

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: App,
      children: [
        {
          path: '/stage/:stageId',
          name: 'stage',
          component: Stage
        }
      ]
    },
    {
      path: '*',
      redirect: 'home'
    }
  ]
})

new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router: router
})

export {router}

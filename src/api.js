import Vue from 'vue'
import VueResource from 'vue-resource'

function get(url) {
  return Vue.http['get'](url)
  .catch((error) => {
    console.log('there is some error here!')
  })
}

export {get}

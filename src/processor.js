import * as api from './api'
import _ from 'lodash'

function getHP(url) {
  _.debounce(
    () => {
      api.get(stageUrl)
        .then(resp => {
          console.log('api get ', resp);
          let stage = _.find(resp.body, (stageObj) => {
            return stageObj.stageNo == self.stageNumber
          })
          console.log('processor found stage ', stage)
          return stage.hitPts
        })
        .catch((error) => {
          console.log('there is some error here!')
        })
    }, 1000
  )
}

export {getHP}

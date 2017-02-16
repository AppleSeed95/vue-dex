import * as api from './api'
import _ from 'lodash'

function getStage(config) {
  return api.get(config.url)
    .then(resp => {
      return _.find(resp.body, (stageObj) => {
        return stageObj.stageNo == config.id
      })
    })
    .catch((error) => {
      console.log('there is some error here!')
    })
}

export {getStage}

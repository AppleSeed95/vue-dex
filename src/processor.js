import * as api from './api'
import _ from 'lodash'

let typeColors = [
  {
    type: 'bug',
    code: '#87980F'
  },
  {
    type: 'dark',
    code: '#3C3025'
  },
  {
    type: 'dragon',
    code: '#6F35FC'
  },
  {
    type: 'electric',
    code: '#F7D02C'
  },
  {
    type: 'fairy',
    code: '#D685AD'
  },
  {
    type: 'flying',
    code: '#A98FF3'
  },
  {
    type: 'fighting',
    code: '#C22E28'
  },
  {
    type: 'fire',
    code: '#EE8130'
  },
  {
    type: 'ghost',
    code: '#735797'
  },
  {
    type: 'grass',
    code: '#7AC74C'
  },
  {
    type: 'ground',
    code: '#E2BF65'
  },
  {
    type: 'ice',
    code: '#96D9D6'
  },
  {
    type: 'normal',
    code: '#A8A77A'
  },
  {
    type: 'poison',
    code: '#A33EA1'
  },
  {
    type: 'psychic',
    code: '#F95587'
  },
  {
    type: 'rock',
    code: '#B6A136'
  },
  {
    type: 'steel',
    code: '#B7B7CE'
  },
  {
    type: 'water',
    code: '#6390F0'
  }
]

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

function getTypeColor(type) {
  let color = _.find(typeColors, (pair) => {
    return pair.type == type.toLowerCase()
  })
  return color.code
}

function getCaptureRate(source) {
  let captureRates = breakLine(source)

  let captureRateBase = captureRates[0].slice(5, -1)
  let captureRateBonus = captureRates[1].slice(6, -7)

  if (isNaN(parseInt(captureRateBonus)) || isNaN(parseInt(captureRateBase))) {
    return {base: '0', bonus: '0'}
  } else {
    return {base: captureRateBase, bonus: captureRateBonus}
  }
}

function breakLine(string) {
  if (string) {
		return string.split('\n');
	}
}

export {getStage, getTypeColor, getCaptureRate}

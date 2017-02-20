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

function getTeams(teams) {
  let results = []

  // get array of recommended teams
  let teamsTruncated = _.trim(teams)
  let teamsArr = breakSentences({string: teamsTruncated, mark: '\n'})

  // split 1 team into array of members
  _.each(teamsArr, (team) => {
    let config = {
      string: team,
      mark: '/'
    }

    let memberArr = breakSentences(config)
    results.push(memberArr)
  })

  return _.compact(results)
}

function getMembers(team) {
  let results = _.words(team, /[^, ]+/g)
  return results
}

function getMegaSupports(source) {
  let results = _.words(source, /\[(.*?)\]/g)
  return results
}

function getOtherSupports(source) {
  let supportsArrFull = breakLine(source)
  let supportsArrOther = _.drop(supportsArrFull)
  return _.words(_.compact(supportsArrOther), /[^, ]+/g)
}

function getStageCollection() {
  let url = './static/scripts/pokemonCollection.json'

  return api.get(url)
    .then(resp => {
      return resp.body
    })
    .catch((error) => {
      console.log('there is some error getting stage collection here!')
    })
}

function getStagePokemon(config) {
  let divisionMega = {}, divisionOthers = {},
      divisionMain = [], divisionSpecial = [], divisionExpert = []

  return getStageCollection()
  .then((collection) => {
    divisionMega = _.flatten(_.toArray(_.pick(collection, 'mega')))
    divisionOthers = _.flatten(_.toArray(_.pick(collection, ['expert', 'main', 'special'])))

    divisionMain = _.flatten(_.toArray(_.pick(collection, 'main')))
    divisionExpert = _.flatten(_.toArray(_.pick(collection, 'expert')))
    divisionSpecial = _.flatten(_.toArray(_.pick(collection, 'special')))
  })
  .then(() => {
    if (config.isMega) {
      return _.find(divisionMega, (pokemon) => {
        return _.toLower(pokemon.pokemonName).includes(_.toLower(config.name))
      })
    } else if (config.separateDivision == '') {
      return _.find(divisionOthers, (pokemon) => {
        return _.toLower(pokemon.pokemonName).includes(_.toLower(config.name))
      })
    } else {
      if (config.separateDivision == 'main') {
        return _.find(divisionMain, (pokemon) => {
          return _.toLower(pokemon.pokemonName).includes(_.toLower(config.name))
        })
      }

      if (config.separateDivision == 'expert') {
        return _.find(divisionExpert, (pokemon) => {
          return _.toLower(pokemon.pokemonName).includes(_.toLower(config.name))
        })
      }

      if (config.separateDivision == 'special') {
        return _.find(divisionSpecial, (pokemon) => {
          return _.toLower(pokemon.pokemonName).includes(_.toLower(config.name))
        })
      }
    }
  })
}

function breakLine(string) {
  if (string) {
		return string.split('\n');
	}
}

function breakSentences(config) {
  if (config.string) {
    return config.string.split(config.mark)
  }
}

export {getStage, getTypeColor, getCaptureRate, getTeams, getMembers, getStageCollection, getStagePokemon, getMegaSupports, getOtherSupports}

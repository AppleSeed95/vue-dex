import Vue from 'vue'
import _ from 'lodash'

const mainStageCap = 530;
const expertStageCap = 45;

const pokemonCollectionUrl = './assets/scripts/pokemonCollection.json'
const expertStageUrl = './assets/scripts/expertGuides/expert.json'

const stageCollections = [
  {
    levelCap: 10,
    stageUrl: 'pb'
  }, {
    levelCap: 20,
    stageUrl: 'sb'
  }, {
    levelCap: 30,
    stageUrl: 'nf'
  }, {
    levelCap: 45,
    stageUrl: 'ia'
  }, {
    levelCap: 60,
    stageUrl: 'rp'
  }, {
    levelCap: 75,
    stageUrl: 'gr'
  }, {
    levelCap: 90,
    stageUrl: 'ss'
  }, {
    levelCap: 105,
    stageUrl: 'sm'
  }, {
    levelCap: 120,
    stageUrl: 'mv'
  }, {
    levelCap: 135,
    stageUrl: 'cn'
  }, {
    levelCap: 150,
    stageUrl: 'jv'
  }, {
    levelCap: 180,
    stageUrl: 'ww'
  }, {
    levelCap: 210,
    stageUrl: 'pv'
  }, {
    levelCap: 240,
    stageUrl: 'at'
  }, {
    levelCap: 300,
    stageUrl: 'rc'
  }, {
    levelCap: 350,
    stageUrl: 'du'
  }, {
    levelCap: 400,
    stageUrl: 'vp'
  }, {
    levelCap: 450,
    stageUrl: 'bs'
  }, {
    levelCap: 500,
    stageUrl: 'gh'
  }, {
    levelCap: 530,
    stageUrl: 'nc'
  }
];

function getStageUrl(stageId) {
  let targetPhase = _.find(stageCollections, phase => {
    return stageId <= phase.levelCap
  })

  return './static/scripts/stageGuides/' + targetPhase.stageUrl + '.json'
}

export {mainStageCap, expertStageCap, pokemonCollectionUrl, expertStageUrl, getStageUrl}

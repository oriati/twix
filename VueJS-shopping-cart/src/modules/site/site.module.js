import Vue from 'vue';
export const ADD_COMPONENT = 'store/ADD_COMPONENT';
export const GET_SITE = 'store/GET_SITE';


const state = {
  site: {}
}

const actions = {
  getSite ({ commit }) {
    Vue.http.get('http://localhost:3003/data/site')
      .then(res => res.json())
      .then(site => {
        // console.log('site', site);
        commit(GET_SITE, site);
      })
      }
}

const mutations = {
  [GET_SITE](state, site) {
    // console.log('goob',site);
    state.site = site[0];
  }
}

const actions = {
    addComponent({commit}, compType){
            commit('ADD_COMPONENT', compType)
            console.log('action:', compType);
            
        }
  }

const mutations = {
  ADD_COMPONENT( state, compType ){
        console.log('mutation:', compType);
            state.comps.push({
                _id: '',
                name: '',
                type: compType,
                props: {
                      heading: 'Hi, I\'m Photon, another fine little freebie from Accumsan',
                      subHeading: 'feugiat mi commodo erat lorem ipsum, sed magna lobortis feugiat sapien sed etiam volutpat accumsan.',
                      buttonText: 'Make this button whatever you want!'
                    }
            })
        }
}

const getters = {
        // heading: state => state.comps.props.heading
        getComps: state => state.site.comps
    }

export default {
  state,
  getters,
  actions,
  mutations
}
import axios from 'axios';
import { createStore } from 'vuex';

//to handle state
const state = {
    meals: []
}

//to handle state
const getters = {
    allMeals: (state) => state.meals
}

//to handle actions
const actions = {
    getMeals({ commit }) {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
            .then(response => {
                commit('SET_MEALS', response.data.meals)
            })
            //.catch((response) => fail(response))
    }
}

//to handle mutations
const mutations = {
    SET_MEALS(state, meals) {
        state.meals = meals
    }
}

export const store = createStore({
    state,
    getters,
    actions,
    mutations,
})
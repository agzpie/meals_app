import axios from 'axios';
import { createStore } from 'vuex';

//to handle state
const state = {
    meals: [],
    categories: [],
    areas: [],
}

//to handle state
const getters = {
    allMeals: (state) => state.meals,
    allCategories: (state) => state.categories,
    allAreas: (state) => state.areas
}

//to handle actions
const actions = {
    getMeals({ commit }) {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Soup')
            .then(response => {
                commit('SET_MEALS', response.data.meals)
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getCategories({ commit }) {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
            .then(response => {
                commit('SET_CATEGORIES', response.data.meals)
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getAreas({ commit }) {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
            .then(response => {
                commit('SET_AREAS', response.data.meals)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

//to handle mutations
const mutations = {
    SET_MEALS(state, meals) {

        state.meals = [...meals]
    },

    SET_CATEGORIES(state, categories) {
        state.categories = [...categories]
    },

    SET_AREAS(state, areas) {
        state.areas = [...areas]
    }
}

export const store = createStore({
    state,
    getters,
    actions,
    mutations,
})
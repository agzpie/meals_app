import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/search.php?s=Soup')
    },

    getCategories() {
        return apiClient.get('/list.php?c=list')
    },

    getArea() {
        return apiClient.get('/list.php?a=list')
    },

    getIngredients() {
        return apiClient.get('/list.php?i=list')
    },
}
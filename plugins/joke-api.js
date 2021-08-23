export default function({ $axios }, inject) {
    const API = {
        async getJokes(category = "Any", amount = 10) {
            return await $axios.get(`${category}?amount=${amount}`)
        }
    }

    inject('jokeAPI', API)
}
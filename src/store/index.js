import {
  createStore
} from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    apiKey: 'd616eb310967fea5ef61a5fe251a8b19',
    weather: null,
  },
  getters: {},
  mutations: {
    getWeather(state, payload) {
      state.weather = payload
      console.log(state.weather);
    }
  },
  actions: {
    async getWeather(context, city) {
      try {
        let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${context.state.apiKey}`)
        console.log(response);
        let {
          lat,
          lon,
          local_names
        } = response.data[0]
        if (local_names.ru.toLowerCase() == city.toLowerCase()) {
          let response2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${context.state.apiKey}&units=metric&lang=ru`)
          console.log(response2);
          let weatherInfo = {
            ...response2.data,
            name: city
          }
          context.commit('getWeather', weatherInfo)
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
})
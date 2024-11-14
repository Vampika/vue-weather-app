<template>
  <div class="container">
    <div class="search-box">
      <input type="text" v-model="query" @keypress.enter="getWeather" class="search-bar" placeholder="Search..." />
    </div>
    <WeatherBlock :weather="weather" />


  </div>
</template>

<script setup>
import WeatherBlock from "./components/WeatherBlock.vue";
</script>

<script>
import { fetchWeather } from "./api/weather-api";

export default {
  name: 'App',
  data() {
    return {
      api_key: "39d23d21c34e2646ebcd6c4321ee3b87",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    async getWeather(){
      const currentWeather = await fetchWeather(this.query);
      this.weather = currentWeather;
    },
    setResults(results) {
      this.weather = results;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Helvetica, Arial, sans-serif;
}

#app {
  color: #000;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: url('./assets/cold.jpg') center no-repeat;
  background-size: cover;
  transition: 0.4s;
}

.container {
  min-width: 500px;
  padding: 20px;
}

.search-box {
  margin-bottom: 30px;
}

.search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 16px 0px 16px 0px;
}
</style>
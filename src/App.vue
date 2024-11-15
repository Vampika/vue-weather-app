<template>
  <div class="container">
    <div class="search-box">
      <input type="text" v-model="query" @keypress.enter="getWeather" class="search-bar" placeholder="Search..." />
      <img @click="getWeather" src="./assets/search-normal.svg"/>
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
    async getWeather(event){
      const currentWeather = await fetchWeather(this.query);
      this.weather = currentWeather;
      console.log(event.target);
      this.query = "";
    },
    setResults(results) {
      this.weather = results;
    }
  }
}
</script>

<style>
@import url("./fonts.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

#app {
  color: #000;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #DCF3FF;
  background-size: cover;
  transition: 0.4s;
}

.container {
  min-width: 450px;
  padding: 20px;
}

@media screen and (max-width: 450px){
  .container{
    min-width: 100%;
  }
}

.search-box {
  margin-bottom: 50px;
  position: relative;
}

.search-box img {
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
}

.search-bar {
  display: block;
  width: 100%;
  padding: 15px 28px;
  color: #54577A;
  font-size: 16px;
  appearance: none;
  border: none;
  outline: none;
  background-color: #ffffff;
  border-radius: 10px;
  transition: 0.4s;
}

</style>
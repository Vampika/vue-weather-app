<template>
  <div class="container">
    <div class="search-box">
      <input 
        type="text" 
        v-model="query" 
        @keypress.enter="fetchWeather" 
        class="search-bar" 
        placeholder="Search..." 
      />
    </div>

    <div class="weather" v-if="weather.name">
      <div class="weather__location">{{ weather.name }}</div>
      <div class="weather__date">{{ formattedDate }}</div>
      <div class="weather__temperature">{{ roundedTemperature }}°C</div>
      <div class="weather__description">{{ weather.weather[0].main }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      api_key: "737080e91b338aef12f3312300630985",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  computed: {
    formattedDate() {
      return new Intl.DateTimeFormat("en-EN", { dateStyle: 'full' }).format(new Date());
    },
    roundedTemperature() {
      return Math.round(this.weather.main?.temp || 0);
    }
  },
  methods: {
    fetchWeather() {
      if (this.query) {
        const url = `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`;
        fetch(url)
          .then(res => res.json())
          .then(this.setResults)
          .catch(err => console.error('Error fetching weather data:', err));
      }
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

.weather {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather__location {
  font-size: 32px;
  font-weight: 600;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
}

.weather__date {
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 10px;
}

.weather__temperature {
  font-size: 102px;
  font-weight: 800;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  margin: 10px;
}

.weather__description {
  font-size: 48px;
  font-style: italic;
}
</style>
<template>
  <div class="weather" v-if="weather.name">
    <div class="weather__left-wrapper">
      <div class="weather__location">{{ weather.name }}</div>
      <div class="weather__date">{{ formattedDate }}</div>
    </div>
    <div class="weather__right-wrapper">
      <div class="weather__temperature">{{ roundedTemperature }}°C</div>
      <div class="weather__description">{{ weather.weather[0].main }}</div>
    </div>

  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
let props = defineProps(['weather']);
let roundedTemperature = computed(() => Math.round(props.weather?.main.temp || 0));
</script>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    formattedDate() {
      return new Intl.DateTimeFormat("en-EN", { dateStyle: 'full' }).format(new Date());
    },
  },
}
</script>

<style>
.weather {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.weather__left-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.weather__right-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weather__location {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.weather__date {
  font-size: 14px;
  font-weight: 500;
  color: #54577A;
}

.weather__temperature {
  font-size: 32px;
  font-weight: 600;
  color: #2A60B7;
  margin: 10px;
}

.weather__description {
  font-size: 14px;
  font-weight: 600;
  color: #2A60B7;
}
</style>
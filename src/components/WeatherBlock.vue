<template>
  <div class="weather" v-if="weather.name">
    <div class="weather__location">{{ weather.name }}</div>
    <div class="weather__date">{{ formattedDate }}</div>
    <div class="weather__temperature">{{ roundedTemperature }}°C</div>
    <div class="weather__description">{{ weather.weather[0].main }}</div>
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
<script setup>
import { ref, reactive, computed } from 'vue'

const state = reactive({
  count: 0,
  text: '',
  data: [
    { id: 1, name: 'Denis', age: 32 },
    { id: 2, name: 'Anya', age: 22 },
    { id: 3, name: 'Kostya', age: 1 },
    { id: 4, name: 'Rinat', age: 50 },
    { id: 5, name: 'Roza', age: 70 },
  ],
})
const onButtonIncreaseCountClick = () => (state.count += 1)
const onButtonDicreaseCountClick = () => (state.count -= 1)
const queryData = computed(() => {
  return state.data.filter(
    (item) =>
      item.name.toLowerCase().indexOf(state.text.toLowerCase()) >= 0 ||
      item.age >= state.text
  )
})
console.log(queryData)
</script>

<template>
  <div>
    {{ state.count }}
    <div>
      <button v-on:click="onButtonIncreaseCountClick">increase</button>
      <button v-on:click="onButtonDicreaseCountClick">dicrease</button>
    </div>
    <div>
      <ul>
        <li v-for="items in queryData" v-bind:key="items.id">
          {{ items.name }} {{ items.age }}
        </li>
        <input type="text" v-model="state.text" />
      </ul>
    </div>
  </div>
</template>

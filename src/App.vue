<script setup>
import { reactive, computed, ref } from 'vue'
import { EMPTY_STRING } from './common/constants'
import axios from 'axios'
const review = reactive({
  author: EMPTY_STRING,
  stars: null,
  text: EMPTY_STRING,
  photo: null,
  isRecommended: false,
})
const stars = [1, 2, 3, 4, 5]
const previewFilePath = computed(() => {
  if (review.photo) return URL.createObjectURL(review.photo)
})
const submit = () => {
  console.log('Submit!')
  axios
    .post('api', review, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log('Error!!!!!', err)
    })
}
const uploadFile = (e) => {
  const file = e.target.files[0]
  review.photo = file
}
</script>

<template>
  <form action="#">
    <el-input v-model="review.author" placeholder="Please input" clearable />

    <el-input
      v-model="review.text"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />

    <h4>Оценка</h4>
    <el-radio-group v-model="review.stars">
      <el-radio v-for="(star, index) in stars" :key="star" :label="index + 1">{{
        star
      }}</el-radio>
    </el-radio-group>

    <div>
      <input type="file" @change="uploadFile" />
      <img
        v-if="review.photo"
        :src="previewFilePath"
        alt="avatar"
        style="width: 100px"
      />
    </div>

    <el-radio-group v-model="review.isRecommended">
      <el-radio :label="false">Не советую</el-radio>
      <el-radio :label="true">Советую</el-radio>
    </el-radio-group>

    <el-button type="primary" @click="submit">Отправить</el-button>
  </form>
</template>

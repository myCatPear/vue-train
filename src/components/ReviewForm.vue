<script>
import { reactive, computed, defineComponent } from 'vue'
import UButton from './UButton.vue'
import { EMPTY_STRING } from '../common/constants'
import axios from 'axios'

export default defineComponent({
  name: 'ReviewForm',
  components: {
    UButton,
  },
  setup() {
    const review = reactive({
      author: EMPTY_STRING,
      stars: null,
      text: EMPTY_STRING,
      photo: null,
      isRecommended: false,
    })

    const stars = [1, 2, 3, 4, 5]

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
    return {
      review,
      submit,
      stars,
    }
  },
})
</script>

<template>
  <form action="#">
    <UInput v-model="review.author" placeholder="Please input" clearable />
    <UInput
      type="textarea"
      v-model="review.text"
      placeholder="Please input text"
      clearable
    />

    <h4>Оценка</h4>
    <URadioButton v-model="review.stars" :data="stars" />
    <el-radio-group v-model="review.stars">
      <el-radio v-for="(star, index) in stars" :key="star" :label="index + 1">{{
        star
      }}</el-radio>
    </el-radio-group>

    <UFile v-model="review.photo" />

    <el-radio-group v-model="review.isRecommended">
      <el-radio :label="false">Не советую</el-radio>
      <el-radio :label="true">Советую</el-radio>
    </el-radio-group>
    <UButton :action="submit">Отправить</UButton>
  </form>
</template>

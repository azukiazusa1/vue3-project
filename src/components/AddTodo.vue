<template>
  <input type="text" v-model="state.inputValue" />
  <button @click="onClick" :disabled="state.hasError">追加</button>
  <p v-if="state.hasError" class="error">タイトルが長すぎ！</p>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'

interface State {
  inputValue: string;
  hasError: boolean;
}
export default defineComponent({
  emits: ['add'],
  setup (_, context) {
    const state = reactive<State>({
      inputValue: '',
      hasError: false
    })

    const onClick = () => {
      context.emit('add', state.inputValue)
      state.inputValue = ''
    }

    watchEffect(() => {
      if (state.inputValue.length > 10) {
        state.hasError = true
      } else {
        state.hasError = false
      }
    })

    return {
      state,
      onClick
    }
  }
})
</script>

<style scoped>
.error {
  color: red;
}
</style>

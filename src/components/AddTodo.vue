<template>
  <input type="text" v-model="state.inputValue" />
  <button @click="onClick">追加</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

interface State {
  inputValue: string;
}
export default defineComponent({
  emits: ['add'],
  setup (_, context) {
    const state = reactive<State>({
      inputValue: ''
    })

    const onClick = () => {
      context.emit('add', state.inputValue)
      state.inputValue = ''
    }

    return {
      state,
      onClick
    }
  }
})
</script>

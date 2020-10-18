<template>
  <div>
    <span>{{ todo.title }}</span>
    <input type="checkbox" value="todo.done" @change="toggle" />
  </div>
  <div>
    {{ date }}
  </div>
  <div>
    <button @click="remove">削除</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Todo } from '@/types/todo'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>
    }
  },
  emits: ['toggle', 'remove'],
  setup (props, context) {
    const date = computed(() => {
      if (!props.todo) return
      const { createdAt } = props.todo
      return `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`
    })

    const toggle = () => {
      context.emit('toggle', props.todo!.id)
    }

    const remove = () => {
      context.emit('remove', props.todo!.id)
    }

    return {
      date,
      toggle,
      remove
    }
  }
})
</script>

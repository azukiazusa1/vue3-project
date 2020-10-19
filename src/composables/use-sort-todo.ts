import { computed, Ref } from 'vue'
import { Todo } from '@/types/todo'

export default (todos: Ref<Todo[]>) => {
  const sortTodo = computed(() => todos.value.sort((a, b) => {
    return b.createdAt.getTime() - a.createdAt.getTime()
  }))

  return {
    sortTodo
  }
}

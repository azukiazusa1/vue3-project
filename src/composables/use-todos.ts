import { ref } from 'vue'
import { fetchTodo } from '@/api'
import { Todo } from '@/types/todo'

export default () => {
  const todos = ref<Todo[]>(fetchTodo())

  return {
    todos
  }
}

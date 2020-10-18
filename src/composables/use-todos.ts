import { ref } from 'vue'
import { fetchTodo } from '@/api'
import { Todo } from '@/types/todo'

export default () => {
  let todos = ref<Todo[]>(fetchTodo())

  return {
    todos
  }
}

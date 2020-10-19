import { Ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { Todo } from '@/types/todo'

export default (todos: Ref<Todo[]>) => {
  const addTodo = (title: string) => {
    todos.value = [...todos.value, {
      id: uuid(),
      title,
      done: false,
      createdAt: new Date()
    }]
  }

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id: string) => {
    const todo = todos.value.find(todo => todo.id === id)
    if (!todo) return
    todo.done = !todo.done
  }

  return {
    addTodo,
    removeTodo,
    toggleTodo
  }
}

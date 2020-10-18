<template>
  <todo-list
    v-for="todo in sortTodo"
    :todo="todo"
    :key="todo.id"
    @toggle="toggleTodo"
    @remove="removeTodo"
  />
  <add-todo
    @add="addTodo"
  />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import useTodos from '@/composables/use-todos'
import useSortTodo from '@/composables/use-sort-todo'
import useActionTodo from '@/composables/use-action-todo'

export default defineComponent({
  components: {
    TodoList,
    AddTodo
  },
  setup () {
    const { todos } = useTodos()
    const { sortTodo } = useSortTodo(todos)
    const { addTodo, removeTodo, toggleTodo } = useActionTodo(todos)

    watchEffect(() => console.log(todos.value))

    return {
      sortTodo,
      addTodo,
      removeTodo,
      toggleTodo
    }
  }
})
</script>

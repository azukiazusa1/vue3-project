import { v4 as uuid } from 'uuid'
import { Todo } from '@/types/todo'

export const fetchTodo = () => {
  return [
    {
      id: uuid(),
      title: 'タイトル1',
      done: false,
      createdAt: new Date('2020-10-01')
    },
    {
      id: uuid(),
      title: 'タイトル2',
      done: true,
      createdAt: new Date('2020-10-02')
    },
    {
      id: uuid(),
      title: 'タイトル3',
      done: false,
      createdAt: new Date('2020-10-03')
    }
  ] as Todo[]
}

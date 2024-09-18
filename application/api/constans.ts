import type { BoardColumn } from '~/application/types/app/boardColumn'
import { CardPriority } from '~/application/types/app/boardCard'

export const USERS_LIST: string[] = ['Maksim', 'Egor', 'Denys', 'Alex']

export const MOCK_BOARD_DATA:BoardColumn[] = [
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 1, title: 'Task 1', description: 'Card description', assigned: USERS_LIST[0], participants: [], priority: CardPriority.Low },
      { id: 2, title: 'Task 2', description: '', assigned: null, participants: [], priority: null }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 3, title: 'Task 3', description: '', assigned: null, participants: [], priority: null }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [
      { id: 4, title: 'Task 4', description: '', assigned: null, participants: [], priority: null }
    ]
  }
]

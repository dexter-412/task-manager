import type { BoardCard } from '~/application/types/app/boardCard'

export interface BoardColumn {
    id: number,
    title: string,
    cards: BoardCard[],
}

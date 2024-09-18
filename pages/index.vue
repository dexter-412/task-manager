<template>
  <Board :board-columns="boardColumns" />
</template>

<script setup lang="ts">
import Board from '~/components/board/Board.vue'
import { RouteName } from '~/application/types/app/router'
import { useBoardStore } from '~/store/board'
import type { BoardColumn } from '~/application/types/app/boardColumn'

definePageMeta({
  name: RouteName.Board,
  pageHeading: 'Board'
})

const boardStore = useBoardStore()

// Use useAsyncData for fetch from server
const boardColumns = computed<BoardColumn[]>({
  get () {
    return boardStore.boardColumns
  },
  set (neVal) {
    boardStore.updateBoardColumns(neVal)
  }
})
</script>

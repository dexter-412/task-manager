<template>
  <div class="board">
    <Draggable
      :list="boardColumns"
      group="columns"
      item-key="board"
      class="board__columns"
      :handle="`.${DraggableClass.HandleDrag}`"
      :ghost-class="DraggableClass.Ghost"
      :force-fallback="true"
      :fallback-class="DraggableClass.Fallback"
    >
      <template #item="{ element }">
        <BoardColumn :column="element" />
      </template>
    </Draggable>

    <div class="board__actions">
      <ToggleAdding @add="addColumn" />
    </div>
  </div>

  <CardModal
    v-model="boardStore.isCardModalVisible"
  />
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'
import { useBoardStore } from '~/store/board'
import { DraggableClass } from '~/application/compunentResources/vueDraggableResources'
import CardModal from '~/components/modals/CardModal.vue'
import type { BoardColumn } from '~/application/types/app/boardColumn'

interface Props {
  boardColumns: BoardColumn[],
}

defineProps<Props>()

const boardStore = useBoardStore()

function addColumn (name: string) {
  boardStore.addColumn(name)
}
</script>

<style scoped lang="scss">
.board {
  overflow-x: auto;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &__columns {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  &__actions {
    width: 200px;
  }
}
</style>

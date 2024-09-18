<template>
  <QCard
    :key="handledColumn.id"
    class="board-column"
  >
    <QCardSection class="board-column__header">
      <QIcon
        color="black"
        name="menu"
        :class="DraggableClass.HandleDrag"
      />
      <h5 class="board-column__title">
        {{ handledColumn.title }}
      </h5>
    </QCardSection>

    <QSeparator class="q-mb-md" />

    <Draggable
      :list="handledColumn.cards"
      group="cards"
      :animation="200"
      item-key="board"
      class="board-column__cards"
      :ghost-class="DraggableClass.Ghost"
      :force-fallback="true"
      :fallback-class="DraggableClass.Fallback"
    >
      <template #item="{ element }">
        <BoardCard
          :card="element"
          :column-id="handledColumn.id"
        />
      </template>
    </Draggable>

    <QCardSection dense class="board-column__actions">
      <ToggleAdding
        call-add-form-button-text="+ Add card"
        add-form-submit-button-text="Add card"
        add-form-placeholder="Enter card name"
        @add="addCard"
      />
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'
import type { BoardColumn } from '~/application/types/app/boardColumn'
import type { BoardCard } from '~/application/types/app/boardCard'
import { useBoardStore } from '~/store/board'
import { DraggableClass } from '~/application/compunentResources/vueDraggableResources'

interface Props {
  column: BoardColumn,
}

const props = defineProps<Props>()

const boardStore = useBoardStore()

const handledColumn = computed<BoardColumn>(() => {
  return props.column
})

function addCard (value: string) {
  boardStore.addCard(handledColumn.value.id, value)
}
</script>

<style scoped lang="scss">
.board-column {
  width: 200px;

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 10px;
  }

  &__actions {
    padding: 0 10px 10px;
  }
}
</style>

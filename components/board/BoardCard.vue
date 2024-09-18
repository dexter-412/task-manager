<template>
  <QCard
    :key="card.id"
    class="card"
    @click="showCardModal"
  >
    <QCardSection class="card__content">
      <span>{{ card.title }}</span>

      <div>
        <AssignedIcon
          v-if="card.assigned"
          :assigned="card.assigned"
        />

        <PriorityIcon
          v-if="card.priority"
          :priority="card.priority"
        />
      </div>
    </QCardSection>
  </QCard>
</template>

<script setup lang="ts">
import { type BoardCard } from '~/application/types/app/boardCard'
import { useBoardStore } from '~/store/board'
import PriorityIcon from '~/components/icons/PriorityIcon.vue'
import AssignedIcon from '~/components/icons/AssignedIcon.vue'

interface Props {
  card: BoardCard,
  columnId: number
}

const props = defineProps<Props>()

const boardStore = useBoardStore()

function showCardModal () {
  boardStore.handleCardModalShow(props.columnId, props.card)
}
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

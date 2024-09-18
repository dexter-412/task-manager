<template>
  <QIcon
    name="bookmark"
    :title="priority"
    :color="priorityColor"
  />
</template>

<script setup lang="ts">
import { CardPriority } from '~/application/types/app/boardCard'

interface Props {
  priority: CardPriority | null,
}

const props = defineProps<Props>()

const priorityColor = computed<string | undefined>(() => {
  switch (props.priority) {
    case CardPriority.High:
      return 'red'
    case CardPriority.Medium:
      return 'warning'
    case CardPriority.Low:
      return 'green'
    default:
      return undefined
  }
})
</script>

<template>
  <QSelect
    v-bind="$attrs"
    :model-value="modelValue"
    :options
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]
    >
      <slot :name="slot" />
    </template>
  </QSelect>
</template>

<script setup lang="ts">
import type { SelectType } from '~/application/types/app/types'

interface Props {
  modelValue: SelectType,
  options: string[],
}

defineProps<Props>()
</script>

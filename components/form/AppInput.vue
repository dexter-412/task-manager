<template>
  <QInput
    v-bind="$attrs"
    :model-value="modelValue"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]
    >
      <slot :name="slot" />
    </template>
  </QInput>
</template>

<script setup lang="ts">
import type { ModelType } from '~/application/types/app/types'

interface Props {
  modelValue: ModelType | undefined,
}

defineProps<Props>()
</script>

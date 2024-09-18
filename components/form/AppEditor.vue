<template>
  <QEditor
    v-bind="$attrs"
    :toolbar="toolbarProps"
    :model-value="modelValue"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]
    >
      <slot :name="slot" />
    </template>
  </QEditor>
</template>

<script setup lang="ts">
import type { ModelType } from '~/application/types/app/types'

interface Props {
  modelValue: ModelType | undefined,
}

defineProps<Props>()

const toolbarProps = computed<string[][]>(() => {
  return [
    ['left', 'center', 'right', 'justify'],
    ['bold', 'italic', 'underline', 'strike'],
    ['undo', 'redo'],
    ['quote', 'unordered', 'ordered', 'outdent', 'indent']
  ]
})
</script>

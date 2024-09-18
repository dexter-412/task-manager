<template>
  <QEditor
    v-bind="$attrs"
    :toolbar="toolbarProps"
    :model-value="modelValue"
    @update:model-value="update"
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
import { UpdateEvent } from '~/application/types/app/events'
import type { ModelType } from '~/application/types/app/types'

interface Emits {
  (event: UpdateEvent.ModelValue, value: ModelType): void,
}

const emit = defineEmits<Emits>()

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

function update (val: ModelType) {
  emit(UpdateEvent.ModelValue, val)
}
</script>

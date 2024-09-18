<template>
  <div class="description-block">
    <h6 class="description-block__title">
      Description
    </h6>

    <div
      v-if="isPreviewMode"
      class="description-block__preview"
      @click="toggleMode"
      v-html="modelValue || 'Add description'"
    />

    <AppForm
      v-else
      class="description-block__form"
      @submit.prevent="handleSubmit"
    >
      <AppEditor
        v-model="description"
        class="description-block__editor"
      />

      <div class="description-block__actions">
        <AppButton type="submit">
          Save
        </AppButton>
        <AppButton
          flat
          color="red"
          @click="toggleMode"
        >
          Cancel
        </AppButton>
      </div>
    </AppForm>
  </div>
</template>

<script setup lang="ts">
import { UpdateEvent } from '~/application/types/app/events'
import type { ModelType } from '~/application/types/app/types'
import AppButton from '~/components/UI/AppButton.vue'
import AppForm from '~/components/form/AppForm.vue'
import AppEditor from '~/components/form/AppEditor.vue'

interface Emits {
  (event: UpdateEvent.ModelValue, value: ModelType): void,
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: ModelType,
}

const props = defineProps<Props>()

const isPreviewMode = ref<boolean>(true)

const description = ref<ModelType>(props.modelValue)

function toggleMode () {
  isPreviewMode.value = !isPreviewMode.value

  description.value = props.modelValue
}

function handleSubmit () {
  emit(UpdateEvent.ModelValue, description.value)

  toggleMode()
}
</script>

<style scoped lang="scss">
.description-block {
  &__preview {
    background-color: var(--clr-light-gray);
    border-radius: 4px;
    padding: 6px;
    cursor: pointer;
  }

  &__editor {
    margin-bottom: 10px;
  }

  &__actions {
    display: flex;
    gap: 10px;
  }
}
</style>

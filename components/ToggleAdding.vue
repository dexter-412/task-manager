<template>
  <AddingForm
    v-if="isAdding"
    :input-placeholder="addFormPlaceholder"
    :submit-button-text="addFormSubmitButtonText"
    @cancel="toggleAddingMode"
    @submit:form="submit"
  />

  <AppButton
    v-else
    class="full-width"
    @click="toggleAddingMode"
  >
    {{ callAddFormButtonText }}
  </AppButton>
</template>

<script setup lang="ts">
import AddingForm from '~/components/AddingForm.vue'
import AppButton from '~/components/UI/AppButton.vue'
import { ComponentEvent } from '~/application/types/app/events'

interface Emits {
  (event: ComponentEvent.Add, value: string): void,
}

const emit = defineEmits<Emits>()

function submit (value: string) {
  emit(ComponentEvent.Add, value)
}

interface Props {
  callAddFormButtonText?: string,
  addFormSubmitButtonText?: string,
  addFormPlaceholder?: string,
}

withDefaults(defineProps<Props>(), {
  callAddFormButtonText: '+ Add column',
  addFormSubmitButtonText: 'Add list',
  addFormPlaceholder: 'Enter column name'
})

const isAdding = ref<boolean>(false)

function toggleAddingMode () {
  isAdding.value = !isAdding.value
}
</script>

<template>
  <AppForm
    class="add-column-form"
    @submit.prevent="submitForm"
  >
    <AppInput
      v-model="newColumnName"
      dense
      outlined
      :placeholder="inputPlaceholder"
      class="add-column-form__field"
    />
    <div class="add-column-form__actions">
      <AppButton type="submit">
        {{ submitButtonText }}
      </AppButton>
      <AppButton
        flat
        color="red"
        icon="close"
        @click="emitCancel"
      />
    </div>
  </AppForm>
</template>

<script setup lang="ts">
import AppForm from '~/components/form/AppForm.vue'
import AppInput from '~/components/form/AppInput.vue'
import AppButton from '~/components/UI/AppButton.vue'
import { ComponentEvent } from '~/application/types/app/events'

interface Emits {
  (event: ComponentEvent.SubmitForm, value: string): void,
  (event: ComponentEvent.Cancel): void,
}

const emit = defineEmits<Emits>()

interface Props {
  inputPlaceholder?: string,
  submitButtonText?: string,
}

withDefaults(defineProps<Props>(), {
  inputPlaceholder: 'Enter column name',
  submitButtonText: 'Add list'
})

const newColumnName = ref<string>('')

function submitForm () {
  if (newColumnName.value === '') {
    return false
  }

  emit(ComponentEvent.SubmitForm, newColumnName.value)

  newColumnName.value = ''
}

function emitCancel () {
  emit(ComponentEvent.Cancel)
}
</script>

<style scoped lang="scss">
.add-column-form {
  &__field {
    margin-bottom: 5px;
  }

  &__actions {
    display: flex;
    gap: 4px;
  }
}
</style>

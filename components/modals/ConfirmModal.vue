<template>
  <AppModal class="confirm-modal" :close-icon="false">
    <QCardSection class="confirm-modal__text">
      {{ modalText }}
    </QCardSection>

    <QCardSection class="confirm-modal__actions">
      <AppButton
        v-close-popup
        outline
        label="Cancel"
      />
      <AppButton
        label="Delete"
        color="negative"
        text-color="white"
        icon="delete"
        @click="handleConfirmation"
      />
    </QCardSection>
  </AppModal>
</template>

<script setup lang="ts">
import { ComponentEvent, UpdateEvent } from '~/application/types/app/events'
import AppButton from '~/components/ui/AppButton.vue'

import AppModal from '~/components/UI/AppModal.vue'

interface Emits {
  (event: ComponentEvent.Confirm): void
  (event: UpdateEvent.ModelValue): void
}

const emit = defineEmits<Emits>()

interface Props {
  modalText: string,
}

defineProps<Props>()

function handleConfirmation () {
  emit(ComponentEvent.Confirm)
  emit(UpdateEvent.ModelValue)
}
</script>

<style lang="scss" scoped>
.confirm-modal {
  &__text {
    text-align: center;
    font-size: 20px;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}
</style>

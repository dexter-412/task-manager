<template>
  <QDialog
    v-bind="$attrs"
    :size="200"
  >
    <QCard class="modal">
      <QCardSection class="modal__header">
        <slot
          name="modal-title"
        >
          <h4
            v-if="title !== undefined"
            class="modal__title"
          >
            {{ title }}
          </h4>
        </slot>

        <AppButton
          v-if="closeIcon"
          v-close-popup
          dense
          icon="close"
          flat
          class="modal__close"
        />
      </QCardSection>
      <QCardSection>
        <slot />
      </QCardSection>
    </QCard>
  </QDialog>
</template>

<script setup lang="ts">
import AppButton from '~/components/UI/AppButton.vue'

interface Props {
  title?: string | undefined,
  closeIcon?: boolean
}

withDefaults(defineProps<Props>(), {
  title: undefined,
  closeIcon: true
})
</script>

<style scoped lang="scss">
.modal {
  width: 1100px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__close {
    margin-left: auto;
  }
}
</style>

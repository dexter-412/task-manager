<template>
  <AppModal
    v-if="chosenCard !== undefined"
    :model-value="modelValue"
    class="card-modal"
    @update:model-value="handleModalClose"
  >
    <div class="row q-col-gutter-md">
      <div class="col-sm-8 col-12">
        <div class="flex items-center">
          <span class="q-mr-sm">Status:</span>
          <AppSelect
            dense
            borderless
            :options="boardStore.getColumnsStatusOptions"
            emit-value
            map-options
            :model-value="chosenCard.columnStatusId"
            @update:model-value="handleUpdateCardStatus"
          />
        </div>
        <DescriptionBlock v-model="chosenCard.description" />
      </div>

      <div class="col-sm-4 col-12">
        <AppSelect
          v-model="chosenCard.assigned"
          class="q-mb-sm"
          :options="USERS_LIST"
          dense
          outlined
          use-chips
          label="Assigned"
        />

        <AppSelect
          v-model="chosenCard.participants"
          :options="USERS_LIST"
          dense
          class="q-mb-sm"
          outlined
          multiple
          use-chips
          label="Participants"
        />

        <AppSelect
          v-model="chosenCard.priority"
          :options="PRIORITY_OPTIONS"
          dense
          outlined
          class="q-mb-sm "
          use-chips
          label="Priority"
        />

        <AppButton
          flat
          color="red"
          class="full-width"
          @click="showConfirm"
        >
          Delete
        </AppButton>
      </div>
    </div>

    <ConfirmModal
      v-model="isConfirmModalVisible"
      modal-text="Are you sure you want to delete this card?"
      @confirm="handleDeleteCard"
    />

    <template #modal-title>
      <AppInput
        v-model="chosenCard.title"
        icon="book"
        class="card-modal__title"
        dense
      >
        <template #prepend>
          <q-icon name="book" />
        </template>
      </AppInput>
    </template>
  </AppModal>
</template>

<script setup lang="ts">
import AppModal from '~/components/UI/AppModal.vue'
import { UpdateEvent } from '~/application/types/app/events'
import { useBoardStore } from '~/store/board'
import AppInput from '~/components/form/AppInput.vue'
import AppSelect from '~/components/form/AppSelect.vue'
import { type ChosenCard } from '~/application/types/app/boardCard'
import AppButton from '~/components/UI/AppButton.vue'
import ConfirmModal from '~/components/modals/ConfirmModal.vue'
import { PRIORITY_OPTIONS } from '~/application/compunentResources/constans'
import { USERS_LIST } from '~/application/api/constans'

interface Emits {
  (event: UpdateEvent.ModelValue, value: boolean): void,
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: boolean,
}

defineProps<Props>()

const boardStore = useBoardStore()

const isConfirmModalVisible = ref<boolean>(false)

const chosenCard = computed<ChosenCard>(() => boardStore.chosenCard)

function handleUpdateCardStatus (val: number) {
  boardStore.handleUpdateCardStatus(val)
}

function handleModalClose (val: boolean) {
  boardStore.handleCardEdit()

  emit(UpdateEvent.ModelValue, val)
}

function showConfirm () {
  isConfirmModalVisible.value = true
}

function handleDeleteCard () {
  boardStore.handleCardDelete()

  boardStore.isCardModalVisible = false
}
</script>

<style scoped lang="scss">
.card-modal {
  &__title {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal;
  }
}
</style>

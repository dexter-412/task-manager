<template>
  <AppChip
    color="primary"
    text-color="white"
  >
    {{ assignedIcon }}
  </AppChip>
</template>

<script setup lang="ts">
import AppChip from '~/components/UI/AppChip.vue'

interface Props {
  assigned: string | null
}

const props = defineProps<Props>()

const assignedIcon = computed<string | undefined>(() => props.assigned?.slice(0, 1))
</script>

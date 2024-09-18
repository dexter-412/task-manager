<template>
  <QLayout>
    <AppHeader>
      <slot />
    </AppHeader>
  </QLayout>
</template>

<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue'
</script>

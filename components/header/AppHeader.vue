<template>
  <QHeader>
    <QToolbar>
      <AppButton
        flat
        round
        dense
        icon="menu"
        color="white"
        @click="toggleOpenMenu"
      />
      <QToolbarTitle>{{ pageHeading }}</QToolbarTitle>
    </QToolbar>
  </QHeader>

  <QDrawer
    v-model="isMenuOpen"
    :width="200"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <AppMenu />
  </QDrawer>

  <QPageContainer>
    <QPage class="flex">
      <slot />
    </QPage>
  </QPageContainer>
</template>

<script setup lang="ts">
import AppButton from '~/components/UI/AppButton.vue'
import AppMenu from '~/components/header/AppMenu.vue'

const isMenuOpen = ref<boolean>(true)

const route = useRoute()

const pageHeading = computed<string>(() => {
  return route.meta.pageHeading
    ? route.meta.pageHeading
    : 'Unknown page'
})

function toggleOpenMenu (): void {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

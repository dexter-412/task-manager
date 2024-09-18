<template>
  <QList
    padding
    class="menu fit"
  >
    <QItem
      v-for="menuItem in menuList"
      :key="menuItem.label"
      v-ripple
      clickable
      :to="menuItem.routeName"
      class="menu__item"
    >
      <QItemSection class="menu__item-text">
        {{ menuItem.label }}
      </QItemSection>
    </QItem>
  </QList>
</template>

<script setup lang="ts">
import type { RouteLocationNamedRaw } from '#vue-router'
import { RouteName } from '~/application/types/app/router'

interface MenuItem {
  label: string,
  routeName: RouteLocationNamedRaw,
}

const menuList = computed<MenuItem[]>(() => {
  return [
    {
      label: 'Board',
      routeName: { name: RouteName.Board }
    },
    {
      label: 'Backlog',
      routeName: { name: RouteName.Backlog }
    }
  ]
})
</script>

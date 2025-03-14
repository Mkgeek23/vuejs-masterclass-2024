<script setup lang="ts">
import { useErrorStore } from './stores/error'

const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})
</script>

<template>
  <AuthLayout>
    <AppErrorPage v-if="errorStore.activeError" />

    <RouterView v-else v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <component :is="Component" :key="route.name"></component>

        <template #fallback>
          <span>Loading...</span>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>

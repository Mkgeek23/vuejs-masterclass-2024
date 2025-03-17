<script setup lang="ts">
import { supabase } from './lib/supabaseClient'
import { useErrorStore } from './stores/error'

const errorStore = useErrorStore()
const authStore = useAuthStore()

onMounted(async () => {
  const { data, error } = await supabase.auth.getSession()
  if (data.session?.user) {
    await authStore.setAuth(data.session)
  }
})

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

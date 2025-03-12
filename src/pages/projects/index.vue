<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref()

;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) console.error(error)
  projects.value = data
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Home Page</RouterLink>
    <pre>{{ projects }}</pre>
  </div>
</template>

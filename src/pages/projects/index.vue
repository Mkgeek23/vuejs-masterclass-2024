<script setup lang="ts">
import { projectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/table_columns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects[] | null>(null)

const getProjects = async () => {
  const { data, error, status } = await projectsQuery
  if (error) {
    useErrorStore().setError({ error, customCode: status })
    console.error(error)
  }
  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

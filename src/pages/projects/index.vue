<script setup lang="ts">
import { projectQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/table_columns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects[] | null>(null)

const getProjects = async () => {
  const { data, error } = await projectQuery
  if (error) console.error(error)
  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

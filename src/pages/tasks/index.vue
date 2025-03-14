<script setup lang="ts">
import { columns } from '@/utils/table_columns/tasksColumns'
import { tasksWithProjectsQuery, type TaskWithProjects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TaskWithProjects[] | null>(null)

const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery
  if (error) {
    useErrorStore().setError({ error, customCode: status })
    console.error(error)
  }
  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

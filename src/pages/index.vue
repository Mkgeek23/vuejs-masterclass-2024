<script lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Projects</RouterLink>
    <br />
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>

<script lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/projects">Projects</RouterLink>
    <br />
    <RouterLink :to="{ name: '/projects/[slug]', params: { slug: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>

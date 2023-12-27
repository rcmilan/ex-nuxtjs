<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const postId = route.params.id;
</script>

<template>post: {{ postId }}</template>

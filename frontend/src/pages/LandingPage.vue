<template>
    <q-page-container class="landing-page">
        <header-len @click="dialog = true" />
        <first-block @click="dialog = true" />
        <footer-len />
        <second-block />
        <card-block />
        <info-block />
        <dialog-window :model-value="dialog" @update:modelValue="dialog = $event" />
    </q-page-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
</script>

<style scoped lang="scss">
</style>

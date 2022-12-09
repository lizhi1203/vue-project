<template>
  <div>
    {{useStore.name}}<br/>
    {{name}}<br/>
    {{name}}
  </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue'
import {storeToRefs} from 'pinia'
import { useUserStore } from '@/store/user'
const useStore = useUserStore()
const name = computed(() => useStore.name)
const { name: name1} = storeToRefs(useStore)
</script>

<style lang="scss" scoped>

</style>
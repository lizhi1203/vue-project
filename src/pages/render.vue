<template>
  <div>
    <Heading :level="1">Hello world</Heading>
    <Todo />
  </div>
</template>

<script setup lang="ts">
  import Heading from '@/components/Heading'
  import Todo from '@/components/Todo'
  import {computed, reactive, ref, Ref} from 'vue';
  const msg = ref('');
  const msg1 = ref<string>('');

  interface Course {
    name: string;
    price: number;
  }
  const obj = reactive<Course>({name: 'vue', price: 90})

  const comp = computed<Course>(() => {
    return {name: 'react', price: 100}
  })

  interface Todo {
    title: string;
    done: boolean;
  }
  let todo:Ref<Todo> = ref({title:'vue', done: true})
</script>

<style scoped>

</style>
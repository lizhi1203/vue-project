<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{'done': todo.done}">{{todo.title}}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{active}}/{{all}}</span>
    </div>
    <Rate v-model="score">课程评分:</Rate>
    <Rate v-model="score" theme="blue">课程评分:</Rate>
  </div>
</template>

<script lang="ts" setup>
  import { useTodos } from '@/hooks/useTodos'
  import {ref} from 'vue'
  import Rate from '@/components/Rate.vue'
  let { title, todos, active, all, allDone, addTodo, clear } = useTodos()

const score = ref(3.5);
</script>

<style scoped>
.done {
  color: gray;
  text-decoration: line-through;
}
</style>
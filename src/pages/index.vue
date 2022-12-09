<template>
  <div>
    {{userStore.name}}<br/>
    {{userStore.fullName}}<br/>
    {{name1}}<br/>
    {{name2}}<br/>
    {{x}}-{{y}}
    <button @click="updateUser">更新</button>
    <ul>
      <li>
        <a @click="$router.push('/todo-list')">待办列表</a>
      </li>
      <li>
        <a @click="$router.push('/transition')">动画</a>
      </li>
      <li>
        <a @click="$router.push('/render')">渲染</a>
      </li>
      <li>
        <a @click="$router.push('/element')">Element UI</a>
      </li>
    </ul>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, reactive, toRefs, computed } from 'vue'
import useView from '@/hooks/useView'
import baseService from '@/service/baseService'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { useMouse } from '@vueuse/core'
const Child = defineAsyncComponent(() => import('../components/Child.vue'))
export default defineComponent({
  name: 'VueUse',
  components: {
    Child
  },
  setup() {
    const state = reactive({
      getDataListURL: '/api/ad/json/integrate/list',
      dataForm: {
        positions: 932
      }
    })
    const userStore = useUserStore()
    const name1 = computed(() => userStore.name)
    const { name: name2 } = storeToRefs(userStore)
    const { x, y } = useMouse()
    return { ...useView(state),...toRefs(state), userStore, name1, name2, x, y }
  },
  created () {
    // this.getDataList()
  },
  methods: {
    updateUser() {
      const userStore = useUserStore()
      userStore.updateName('李四')
    },
    getDataList() {
      baseService
        .get('/api/ad/json/integrate/list', {positions: 932})
        .then((res): any => {
          console.log(res)
      })
    }
  },
})
</script>

<style>
:root {
  --main-bg-color: pink;
}
body {
  background-color: var(--main-bg-color);
}
</style>
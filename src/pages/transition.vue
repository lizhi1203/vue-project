<template>
    <span class="remove-btn" @click="removeTodo($event)">❌</span>
    <div class="animate-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="animate" v-show="animate.show">
                📋
            </div>
        </transition>
    </div>
    <button @click="change">click</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
          <!-- 1、多个动画列表过渡时，必须设置key值! 并且需要注意的是这个key不要使用index索引 -->
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        </li>
      </transition-group>

    </ul>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    const animate = reactive({
        show: false,
        el:  null
    });

    const todos = ref([{title: 'aa', done: true}]);
    function change() {
        todos.value.push({title: 'ee', done: true})
    }
    function beforeEnter(el: HTMLElement) {
        const dom = animate.el;
        if (!dom) return;
        // @ts-ignore
        const rect = dom?.getBoundingClientRect() as DOMRect;
        const x = window.innerWidth - rect.left + 60;
        const y = rect.top - 10;
        el.style.transform = `translate(${-x}px, ${y}px)`;
    }
    // @ts-ignore
    function enter(el: HTMLElement, done) {
        document.body.offsetHeight;
        el.style.transform = 'translate(0, 0)';
        el.addEventListener('transitionend', done)
    }

    function afterEnter(el: HTMLElement) {
        animate.show = false;
        el.style.display = 'none';
    }

    function removeTodo(e: Event) {
        animate.show = true;
        // @ts-ignore
        animate.el = e.target as HTMLElement;
    }
</script>

<style scoped>
.animate-wrap .animate {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 100;
    transition: all 0.5s linear;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s linear;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
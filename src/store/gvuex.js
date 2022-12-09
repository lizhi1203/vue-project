import {reactive, computed, inject} from 'vue'

const STORE_KEY = "__store__";

function useStore() {
  return inject(STORE_KEY)
}

function createStore(options) {
  return new Store(options)
}

class Store {
  constructor(options) {
    this.$options = options;
    this.state = reactive({
      data: options.state
    })
    this.mutations = options.mutations;
    this.actions = options.actions;
    this.getters = {};
    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name];
      this.getters[name] = computed(() => fn(this.state))
    })
  }
  get state() {
    return this.state.data
  }
  dispatch(type, payload) {
    const entry = this.mutations[type];
    entry && entry(this.state, payload);
  }
  commit(type, payload) {
    const entry = this.actions[type];
    entry && entry(this.state, payload);
  }
  install(app) {
    app.provider(STORE_KEY, this)
  }
}

export { createStore, useStore}
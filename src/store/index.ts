import { createPinia } from 'pinia';
import pinaPluginPersist from 'pinia-plugin-persist'
// import { createPinia } from 'pinia'
// import piniaPluginPersist from 'pinia-plugin-persist'
// const store = createPinia()
// store.use(piniaPluginPersist)
// export default store

const store = createPinia()
store.use(pinaPluginPersist)
export default store;
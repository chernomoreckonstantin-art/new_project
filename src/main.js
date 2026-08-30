import { createApp} from 'vue'
// import App_W from './App_W.vue'
import App from './App.vue'

import router from './router'

createApp(App)
.use(router)
.mount('#app')

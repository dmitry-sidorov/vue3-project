import { createApp } from 'vue'
import App from './App.vue'
import commonComponents from '@/components/common'

const app = createApp(App)

commonComponents.forEach(component => app.component(component.name, component))

app.mount('#app')

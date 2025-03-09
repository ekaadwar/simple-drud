import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import FontAwesomeIcon from '@/plugins/fontawesome'

// custom elements
import Button from '@/components/elements/buttons/Index.vue'
import Container from '@/components/elements/container/Index.vue'
import Card from '@/components/elements/cards/Index.vue'
// import CardModals from '@/components/elements/cards/Modals.vue'
import InputText from '@/components/elements/input/InputText.vue'
import InputNumber from '@/components/elements/input/InputNumber.vue'
import InputArea from '@/components/elements/input/InputArea.vue'
import Modals from '@/components/elements/modals/Index.vue'

// custom blocks
import BlockModals from '@/components/blocks/modals/Index.vue'

// custom templates
import CardProducts from '@/components/templates/card/Products.vue'
import Navbar from '@/components/templates/navbar/Index.vue'
import FormProduct from '@/components/templates/productShowoff/Form.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

// custom elements initial
app.component('Button', Button)
app.component('Container', Container)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('InputArea', InputArea)
// app.component('CardModals', CardModals)
app.component('Modals', Modals)

// custom blocks initial
app.component('BlockModals', BlockModals)

// custom templates initial
app.component('CardProducts', CardProducts)
app.component('Navbar', Navbar)
app.component('FormProduct', FormProduct)

app.use(createPinia())
app.use(router)

app.mount('#app')

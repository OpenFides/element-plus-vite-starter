import { App } from 'vue'
import FormDesign from './core/FormDesign.vue'

FormDesign.install = (app: App) => {
    app.component(FormDesign.name, FormDesign)
}

const components = [
    FormDesign,
]

const install = (app: App) => {
    components.forEach(component => app.component(component.name, component))
}

export {
    install,
    FormDesign
}

export default {
    install,
    FormDesign
}
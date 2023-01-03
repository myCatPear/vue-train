import UInput from './UInput.vue'
import UFile from './UFile.vue'
import UCheckBox from './UCheckBox.vue'
import URadioButton from './URadioButton.vue'

const components = [
    { name: 'UInput', component: UInput },
    { name: 'UFile', component: UFile },
    { name: 'UCheckBox', component: UCheckBox },
    { name: 'URadioButton', component: URadioButton },

]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}
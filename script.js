import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.29/vue.esm-browser.min.js';

const app = {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                tel: '',
                address: '',
                message: '',
            },
        }
    },
}

createApp(app).mount('#app');
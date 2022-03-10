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
    components: {
        VForm: VeeValidate.Form,
        VField: VeeValidate.Field,
        ErrorMessage: VeeValidate.ErrorMessage,
    },
}

// 載入驗證資源
VeeValidate.defineRule('email', VeeValidateRules['email']);
VeeValidate.defineRule('min', VeeValidateRules['min']);
VeeValidate.defineRule('required', VeeValidateRules['required']);

// 載入台灣語系
VeeValidateI18n.loadLocaleFromURL('./zh_TW.json');

VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize('zh_TW'),
  validateOnInput: false, // 是否於輸入文字時執行，或是移開後執行
});

Vue.createApp(app).mount('#app');
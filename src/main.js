import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import plugins from "./plugins";
import router from './router'
import Hello from "./components/Hello/index.vue";

// 全局组件挂载
Vue.component('HelloTag', Hello)

Vue.use(ElementUI)
Vue.use(plugins)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

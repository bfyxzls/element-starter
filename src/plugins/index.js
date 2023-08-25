import cache from './cache'
import modal from './modal'
// 安装默认插件,在main.js中引入，通过Vue.use()使用它,因为index.js里使用export default导出，所有在main.js里导入时可以不用加{}，直接import plugins from "~/plugins";
export default {
  install(Vue) {
    // 缓存对象
    Vue.prototype.$cache = cache
    // 模态框对象，在vue页面中使用this.$modal.xxx()调用
    Vue.prototype.$modal = modal
  }
}

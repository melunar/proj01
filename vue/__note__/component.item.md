## 组件

> 【components】组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素， Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 js 特性扩展。

```
//全局注册：

//html
<div id="example">
  <my-component></my-component>
</div>
// 注册
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
// 创建根实例
new Vue({
  el: '#example'
})
```

```
//局部注册

var Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})
```

> data 必须是函数，这样才能避免每个重复的组件内部的data是私有的，否则很有可能多个同一组件共享数据，那就糟糕了。

<https://cn.vuejs.org/v2/guide/components.html#Prop>
<https://cn.vuejs.org/v2/guide/components.html>

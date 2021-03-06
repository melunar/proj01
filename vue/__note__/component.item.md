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

> 在 Vue 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息

> 【props】：子组件要显式地用 props 选项声明它期待获得的数据: `props: ['propsName'],`；  
父组件中，向子组件传入参数-数据：`<child :props-name="data"></child>` or `<child props-name="data"></child>`[不加:,即不是用v-bind: 父子之间的数据就不会同步更新，建议使用v-bind]   
**v-bind:内部采用的模式是动态语法，传的值/绑定的值是有数据类型的，或者说值可以是变量；采用字面量语法，即原生html属性，其值只能是string类型**

> HTML 特性/属性是不区分大小写的。所以，当使用的不是字符串模版，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名。

> 不推荐在子组件里更改父组件传来的值，[注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。]我们要遵循【props单向数据流】规范，常用的方式是在子组件用计算属性的方式动态复制一个值：

``` javaScript
props: ['size'],
computed: {
  normalizedSize: function () {
    // something else
    return this.size.trim().toLowerCase()
  }
}
```

> 父组件必须在模板里直接用v-on绑定；子组件用this.$emit("event-name")触发事件  
有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 .native 修饰 v-on

```
//父组件
<button-counter v-on:event-name="handler(data)"></button-counter>
//子组件
this.$emit('event-name',data)
//原生事件
<my-component v-on:click.native="doTheThing"></my-component>
```

> 【slot】内容分发：子组件模板包含至少一个 <slot/> 【匿名slot不要超过一个】插口，否则父组件的内容将会被丢弃。当子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。  
注意：<slot/>写在子组件里面，父子间往里面插dom     
<slot/> 元素可以用一个特殊的属性 name 来配置如何分发内容。 

```
<!-- 子组件 -->
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

```
<!-- 父组件 -->
<app-layout>
  <h1 slot="header">这里可能是一个页面标题</h1>
  <p>主要内容的一个段落。</p>
  <p>另一个主要段落。</p>
  <p slot="footer">这里有一些联系信息</p>
</app-layout>
```

<https://cn.vuejs.org/v2/guide/components.html#作用域插槽>
<https://cn.vuejs.org/v2/guide/components.html>

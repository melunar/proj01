> 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新.

```
<span v-once>This will never change: {{ msg }}</span>
```

>  Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，在应用状态改变时， Vue 能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。

> created 这个钩子在实例被创建之后被调用  
mounted、 updated 、destroyed等钩子

![声明周期](https://cn.vuejs.org/images/lifecycle.png)

> Mustache 不能在 HTML 属性中使用，应使用 v-bind 指令

```
<div v-bind:id="dynamicId"></div>
```

> 指令（Directives）【v-】是带有 v- 前缀的特殊属性。指令属性的值预期是单一 JavaScript 表达式（除了 v-for）  
一些指令能接受一个“参数”，在指令后以冒号指明,如 `v-bind:href="url"`, `v-on:click="handler()"`  
修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定, `v-on:submit.prevent="onSubmit"`

> 过滤器【filters：】可以用在两个地方：mustache 插值和 v-bind 表达式。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符'|'指示, ex: `v-bind:id="rawId | formatId"`  
过滤器只能在 mustache 绑定和 v-bind 表达式（从 2.1.0 开始支持）中使用，因为过滤器设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换，你应该使用**计算属性**。

> 【computed】 vs 【methods】 能达到同样的效果  
计算属性是基于它们的依赖进行缓存的，计算属性只有在它的相关依赖发生改变时才会重新求值；  
相比而言，只要发生重新渲染，methods 调用总会执行该函数。

> 通常更好的想法是使用 【computed】 属性而不是命令式的 【watch】 回调；  
setter getter：

```
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

<https://cn.vuejs.org/v2/guide/computed.html>

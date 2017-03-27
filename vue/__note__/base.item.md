### 基础

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

> :class的值可以是对象，可以是数组，最终都会装换为数组项。   
`<div v-bind:class="[{ active: isActive }, errorClass]"></div>`  
计算属性方式：`<div v-bind:class="classObject"></div>`

> v-if, v-else....选择性渲染时，Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染，会使渲染变快，也会保留部分相同的dom【这个度是怎么控制的？，官方的解释是**高效地**复用，可以这么理解，重复的dom的只更新text，除非有唯一key属性】；如果想避免此情况：给元素添加唯一的key='val'属性即可。

> 一般来说， 【v-if】 有更高的切换开销，而 【v-show】 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。

> 【v-for】 块中，我们拥有对父作用域属性的完全访问权限，包括this命名空间属性，或者多维数组的上一层item及其属性。  
遍历数组或对象：`v-for="(value, keyOrIndex) in objectOrArray"`  
简单灵巧点的：`<span v-for="n in 10">{{ n }}</span>`

> Vue 包含一组观察数组的**变异方法**，所以它们也将会触发视图更新  
push()
pop()
shift()
unshift()
splice()
sort()
reverse()  
也有**非变异方法**，例如： filter(), concat(), slice() 。这些不会改变原始数组，总是返回一个新数组

> 由于 JavaScript 的限制， Vue **不能检测以下变动的数组**：  
当你利用索引直接设置一个项时，例如： vm.items[indexOfItem] = newValue  
当你修改数组的长度时，例如： vm.items.length = newLength  
为了解决第一类问题，以下两种方式都可以实现和 vm.items[indexOfItem] = newValue 相同的效果， 同时也将触发状态更新：  
// Vue.set  
Vue.set(example1.items, indexOfItem, newValue)  
// Array.prototype.splice`  
example1.items.splice(indexOfItem, 1, newValue)  
为了解决第二类问题，你也同样可以使用 splice：  
example1.items.splice(newLength)  

### 事件

> 【v-on】v-on="methods_fun($e)"   
【事件修饰符】: v-on:事件名 + `.stop【阻止单击事件冒泡】  .prevent【组织默认事件】  .capture【添加事件侦听器时使用事件捕获】  .self【只当事件在该元素本身（而不是子元素）触发时触发回调】  .once【点击事件将只会触发一次】`

> 监听键盘事件时，Vue 允许为 v-on 在监听键盘事件时添加按键修饰符[number]  
`v-on:keyup.ctrl.67="hanlder()" //ctrl+C`

```
//按键修饰符别名：
.enter
.tab
.delete (“删除” 和 “退格” 键)
.esc
.space
.up
.down
.left
.right
.ctrl
.alt
.shift
.meta
```

```
event.preventDefault();  
event.stopPropagation();  
```

### 表单

> v-model 指令在表单控件元素上创建双向数据绑定。  
而且对于input，textArea输入框，在文本区域插值并不会生效！  

> 对于单选按钮，勾选框及选择列表选项， v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）

```
<!-- value是data.`picked`  -->
<input type="radio" v-model.trim="picked" value="a">
<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">
<!-- 当选中时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

> 修饰符:  
1. 【lazy】 ，value在 change 事件中同步[change事件：焦点离开，input事件：框内值变化]  
2. 【number】 自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值）  
3. 【trim】自动过滤用户输入的首尾空格


<https://cn.vuejs.org/v2/guide/forms.html>

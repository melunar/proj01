<template>
    <div>
        <input type="txet" placeholder="请输入文字" v-model="msg" @keypress.enter="enter">
        <p>{{upper}}</p>
    </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    enter () {
      alert(this.msg);
    }
  },
  computed: {
    upper () {
      return this.msg.toUpperCase();
    }
  }
}
 /**
  在.vue文件中，export default 后面的对象 就相当于 new Vue() 构造函数中的接受的对象， 它们都是定义组件所需要的数据（data）, 以及操作数 据的方法等， 更为全面的一个 export default 对象，有methods, data, computed, 这时可以看到, 这个对象和new Vue() 构造函数中接受的对象是一模一样的。但要注意data 的书写方式不同。在vue 组件， data 必须是一个函数，它return（返回一个对象），这个返回的对象的数据，供组件实现。
  **/

 </script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
    input {
        width: 300px;
        height: 30px;
        padding-left: 10px;
        border: 1px solid blue;
        border-radius: 10px;
        outline: none;
    }
</style>
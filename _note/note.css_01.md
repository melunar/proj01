> 使用父元素的伪元素清除浮动解决因子元素浮动导致父元素没有高度的问题

```
.container::after {
    clear: both;   
}
```
/**
 * Created by haoyong on 2016/8/1.
 * javascript 数组
 */
/**
 创建：
    new Array(); new Array(size); new Array(1,2,3...,n); [1,2,3...,n];

 操作：
    存取：[index],[index1][index2]
    增加：[]指定一个新的下标, var a = [1,2,3]; a[99] = 0; a.length == 100;//true
    删除：delete a[index]
    遍历：for(var i in arr)

 方法：
    push() 数组末尾添加
    unshift() 数组头部添加
    pop() 删除并返回最后一个元素
    shift() 删除并返回第一个元素
    concat() 合并俩数组

    splice(index,删除的个数，[插入的项])
        删除任意数量的项：(起始下标，个数)
        指定位置插入指定项：(起始下标，0=不删除任意项，要插入的项)
        替换任意数量的项：(起始下标，删除个数，要插入的项)

    slice(返回项的起始位置index1，结束位置index2)

    reverse()颠倒

    sort()

    toString()
    toLocalString()
    join("?")

    indexOf(a)
    lastIndexOf(a)
    every():每一项都是true，返回true
    filter():返回为true的成员
    forEach():
    map():返回每个元素处理后的结果
    some(): 任意一项为true，返回true

    reduce(callback(previousValue, currentValue, currentIndex, array1)[, initialValue]) 开始位置遍历；通过最后一次调用回调函数获得的累积结果。
    reduceRight 末尾开始遍历

 */
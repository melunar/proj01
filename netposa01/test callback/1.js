/**
 * Created by web0304 on 2016/3/23.
 */
function f1(num,callback){
    if(num<0) {
        alert("调用低层函数处理!");
        alert("分数不能为负,输入错误!");
    }else if(num==0){
        alert("调用低层函数处理!");
        alert("该学生可能未参加考试！");
    }else{
        alert("调用高层函数处理!");
        callback();
    }
}
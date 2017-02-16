/**
 * Created by web0304 on 2016/3/18.
 */

Handlebars.registerHelper('taskStatus', function(data) {
    var taskStatus = '';

    switch (data) {

        case 1:
            taskStatus = '未审核';
            break;
        case 2:
            taskStatus = '审核通过';
            break;
        default:
            taskStatus = '未知';
            break;
    }

    return taskStatus;
});
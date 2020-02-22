/*
    1. let 声明变量，作用域与 var 声明的变量不同，很不错
    2. 切换 下载、编辑、删除选项时，label 标签数组变化，必须重新赋值, 
    3. 切换 下载、编辑、删除选项时，都需重新定义每个标签的点击事件
    4. alert('删除id ' + (i + 1) + ' 的条目');     没有括号，则, i和1分别先变成字符串，达不到i+1的效果   
*/






// 处理背景音乐的播放与暂停
var play = document.getElementById('play');
var music = document.getElementById('music');
var download = document.getElementById('download');
var editor = document.getElementById('editor');
var delt = document.getElementById('delete');

play.onclick = function(){
    if(music.paused){
        music.play();
        play.src = '../image/play.png';
    }
    else{
        music.pause();
        play.src = '../image/pause.png';
    }
};

// 声明标签数组
// var label = document.getElementsByTagName('label');         // 需要初始化，获取label.length

// 处理upload 文件的选择下载选项事件
download.onclick = function(){
    var trTag = document.getElementsByTagName('tr');
    if(trTag[0].getElementsByTagName('td')[7].innerText != '下载'){     // 不是下载选项时，跳转到下载选项
        for(var i=0; i<trTag.length; i++){      
            if(i == 0){                     // 第一个tr 保存文本用来区别不同选项
                trTag[i].getElementsByTagName('td')[7].innerText = '下载';
            }else{                          // 不是第一个tr 时，加上下载链接
                // var dPath = 'http://www.zhengxiang4056.club' + trTag[i].getElementsByTagName('td')[6].innerText.substr(21);         // 应该 http 开始，否则跳转到本地文件系统
                // var dPath = '/usr/share/nginx/html' + trTag[i].getElementsByTagName('td')[6].innerText.substr(21);             // 绝对地址 download 有点懵
                var dPath = '../upload/' + trTag[i].getElementsByTagName('td')[6].innerText.substr(38);
                console.log(dPath);
                trTag[i].getElementsByTagName('td')[7].innerHTML = '<font color="blue"><a href="' + dPath + '" download=""><label>下载</label></a></font>';
            }
        }
        // label = document.getElementsByTagName('label');      // 更新标签数组
        click_event();
    }
};


// 处理upload 文件的选择编辑选项事件
editor.onclick = function(){
    var trTag = document.getElementsByTagName('tr');
    if(trTag[0].getElementsByTagName('td')[7].innerText != '编辑'){     // 不是编辑选项时，跳转到编辑选项
        for(var i=0; i<trTag.length; i++){  
            if(i == 0){         // 第一个tr, 保存文本用来区别不同选项
                trTag[i].getElementsByTagName('td')[7].innerText = '编辑';
            }else{              // 不是第一个tr时， 加上编辑链接
                trTag[i].getElementsByTagName('td')[7].innerHTML = '<font color="blue"><label><u>编辑</u></label></font>';
            }
        }
        // label = document.getElementsByTagName('label');     // 更新标签数组
        click_event();
    }
};


// 处理upload 文件的选择删除选项事件
delt.onclick = function(){
    var trTag = document.getElementsByTagName('tr');
    if(trTag[0].getElementsByTagName('td')[7].innerText != '删除'){     // 不是删除选项时，跳转到删除选项
        for(var i=0; i<trTag.length; i++){
            if(i == 0){         // 第一个tr, 保存文本用来区别不同选项
                trTag[i].getElementsByTagName('td')[7].innerText = '删除';
            }else{              // 不是第一个tr时，加上删除链接
                trTag[i].getElementsByTagName('td')[7].innerHTML = '<font color="blue"><label><u>删除</u></label></font>';
            }
        }
        // label = document.getElementsByTagName('label');     // 更新标签数组
        click_event();
    }
};


// 处理单个条目的编辑事件
// 处理单个条目的删除事件
/* var trTag = document.getElementsByTagName('tr');
console.log('length = ' + label.length);
for(let i=0; i<label.length; i++){          // let 变量，成功解决var 声明的变量与数组事件的作用域问题
    //if(trTag[0].getElementsByTagName('td')[7].innerText === '编辑'){        // 处理编辑事件
        // label[i].onclick = function(){
        //     alert('编辑id ' + i + 1 + '   的条目');
        // }
    // }else if(trTag[0].getElementsByTagName('td')[7].innerText === '删除'){  // 处理删除事件
        // label[i].onclick = function(){
            // alert('删除id ' + i + 1 + '   的条目');
        // }
    // }else{
        // console.error('error, 无效的label 点击事件');
    // }             // 先判断，在处理onclick 事件会报错
    console.log(i);
    label[i].onclick = function(){
        alert('点击事件');
        if(trTag[0].getElementsByTagName('td')[7].innerText == '编辑'){
            alert('编辑id ' + i + 1 + ' 的条目');
        }else if(trTag[0].getElementsByTagName('td')[7].innerText == '删除'){
            alert('删除id ' + i + 1 + ' 的条目');
        }else{
            console.error('error, 无效的onclick 点击事件');
        }
    }
}*/

// 处理单个条目的编辑事件
// 处理单个条目的删除事件
function click_event(){         // 封装，每次选项改变后都需调用
    var label = document.getElementsByTagName('label');
    var trTag = document.getElementsByTagName('tr');
    // console.log('length = ' + label.length);
    for(let i =0; i<label.length; i++){
        // console.log(i);
        label[i].onclick = function(){
            // alert('点击事件');
            // alert(trTag[0].getElementsByTagName('td')[7].innerText);
            if(trTag[0].getElementsByTagName('td')[7].innerText === '编辑'){
                // alert('编辑id ' + (i + 1) + ' 的条目');
                fileId = trTag[i+1].getElementsByTagName('td')[0].innerText;
                fileName = trTag[i+1].getElementsByTagName('td')[1].innerText;
                // alert(fileId);
                // 跳转 数据库处理页面
                // window.location.href = 'editor.php?fileId='+fileId + '&newName=321.mp3';
                $.file_edit(fileId, fileName);
            }else if(trTag[0].getElementsByTagName('td')[7].innerText === '删除'){
                // alert('删除id ' + (i + 1) + ' 的条目');
                fileId = trTag[i+1].getElementsByTagName('td')[0].innerText;
                // alert(fileId);
                // 跳转 数据库处理页面
                // window.location.href = 'delete.php?fileId='+fileId;
                $.file_delete(fileId);
            }else{
                console.log('onclick 下载事件');
            }
        };
    }
}







/**
 * 文件删除
 */
jQuery.extend({
    'file_delete': function(fileId){
        var password = prompt('密钥：');
        if (password != null && password.trim() != ''){
            $.ajax({
                type: 'post',
                async: true,        // 异步
                url: 'delete.php',
                dataType: 'text',
                data: {
                    fileId: fileId,
                    password: password
                },
                success: function(data){
                    if (data == 'success'){
                        // 刷新页面
                        window.location.reload();
                    }else {
                        console.error(data);
                        alert('文件删除失败，请查看日志');
                    }
                }, 
                error: function(err){
                    console.error(err.responseText);
                }
            });
        }
    }
});


/**
 * 文件修改操作
 */
jQuery.extend({
    'file_edit': function(fileId, fileName){
        var password = prompt('密钥：');
        if (password != null && password.trim() != ''){
            var newName = prompt('重命名：', fileName);
            if (newName != null && newName.trim() != '' && newName.trim() != fileName){
                $.ajax({
                    type: 'post',
                    async: true,
                    url: 'editor.php',
                    dataType: 'text',
                    data: {
                        fileId: fileId,
                        password: password,
                        newName: newName
                    },
                    success: function(data){
                        if (data == 'success'){
                            // 刷新页面
                            window.location.reload();
                        }else {
                            console.error(data);
                            alert('文件修改失败，请查看日志');
                        }



                    },
                    error: function(err){
                        console.error(err.responseText);
                    }
                });
            }
        }
    }
});












click_event();
/*
    1. 文件信息可以不填写，php可以获取文件信息，但对某些类型文件不确定；
*/

// alert('你好啊！');

var forms = document.getElementById('forms');
// var filename = document.getElementById('filename');
// var filetype = document.getElementById('filetype');
// var filesize = document.getElementById('filesize');
var username = document.getElementById('username');
var password = document.getElementById('password');
var files = document.getElementById('files');
var pass = '0422';

/*function checkFileName(){
    if(filename.value == ''){
        return false;
    }
    return true;
}

function checkFileType(){
    if(filetype.value == ''){
        return false;
    }
    return true;
}

function checkFileSize(){
    if(filesize.value == ''){
        return false;
    }
    return true;
}*/

function checkUserName(){
    if(username.value == ''){
        return false;
    }
    return true;
}

function checkPassword(){
    if(password.value == pass){
        return true;
    }
    return false;
}

function checkFiles(){
    if(files.value == ''){
        return false;
    }
    return true;
}

/*filename.onfocus = function(){
    document.getElementById('name1').innerHTML = "<font color='blue'>&nbsp;&nbsp;文件名必须填写</font>";
}

filename.onblur = function(){
    if(checkFileName()){
        document.getElementById('name1').innerHTML = '';
    }
    else{
        document.getElementById('name1').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件必须填写</font>";
    }
}

filetype.onfocus = function(){
    document.getElementById('type').innerHTML = "<font color='blue'>&nbsp;&nbsp;文件类型必须填写</font>";
}

filetype.onblur = function(){
    if(checkFileType()){
        document.getElementById('type').innerHTML = '';
    }
    else{
        document.getElementById('type').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件类型必须填写</font>";
    }
}

filesize.onfocus = function(){
    document.getElementById('size').innerHTML = "<font color='blue'>&nbsp;&nbsp;文件大小必须填写</font>";
}

filesize.onblur = function(){
    if(checkFileSize()){
        document.getElementById('size').innerHTML = '';
    }
    else{
        document.getElementById('size').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件大小必须填写</font>";
    }
}*/

username.onfocus = function(){
    document.getElementById('name2').innerHTML = "<font color='blue'>&nbsp;&nbsp;上传人信息必须填写</font>";
};

username.onblur = function(){
    if(checkUserName()){
        document.getElementById('name2').innerHTML = '';
    }
    else{
        document.getElementById('name2').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 上传人信息必须填写</font>";
    }
};

password.onfocus = function(){
    document.getElementById('pass').innerHTML = "<font color='blue'>&nbsp;&nbsp;上传密匙请正确填写</font>";
};

password.onblur = function(){
    if(checkPassword()){
        document.getElementById('pass').innerHTML = '';
    }
    else{
        document.getElementById('pass').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 请向管理员询问上传密匙</font>";
    }
};

files.onmouseover = function(){
    document.getElementById('file1').innerHTML = "<font color='blue'>&nbsp;&nbsp;请上传文件</font>";
};

files.onmouseout = function(){
    document.getElementById('file1').innerHTML = '';
};

forms.onsubmit = function(){
    /*if(!checkFileName()){
        document.getElementById('name1').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件必须填写</font>";
        return false;
    }
    if(!checkFileType()){
        document.getElementById('type').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件类型必须填写</font>";
        return false;
    }
    if(!checkFileSize()){
        document.getElementById('size').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 文件大小必须填写</font>";
        return false;
    }*/
    if(!checkUserName()){
        document.getElementById('name2').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 上传人信息必须填写</font>";
        return false;
    }
    if(!checkPassword()){
        document.getElementById('pass').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 请向管理员询问上传密匙</font>";
        return false;
    }
    if(!checkFiles()){
        document.getElementById('file1').innerHTML = "<font color='red'>&nbsp;&nbsp;error! 请上传文件</font>";
        return false;
    }
    return true; 
};
<?php
error_reporting(0);
include_once('connect.php');

echo "<link rel='stylesheet' type='text/css' href='../css/upload.css' />";

if($_FILES["files"]["error"] > 0){
    die($_FILES['files']['error'].'<br />');
}else{
    date_default_timezone_set("PRC");
    $filename = $_FILES["files"]["name"];
    $filetype = $_FILES["files"]["type"];
    $filesize = round(($_FILES["files"]["size"])/1024, 2) .'Kb';
    $username = $_POST["username"];
    $uploadtime = date("Y-m-d H:i:s");
    $uploadpath = '';
    // echo "临时文件信息：" ."<br />";
    // echo "Stored in: " .$_FILES["files"]["tmp_name"] ."<br /><br />";    // 存储在服务器的临时副本名称
}

// 判断目录是否存在
if (!is_dir('../upload')){
    mkdir('../upload');     // 远程无效
}

// 将文件保存到服务器
if(file_exists("../upload/" .$_FILES["files"]["name"])){
    die("文件 " .$_FILES["files"]["name"] . "  已经存在<br />");
}else{
    if(is_uploaded_file($_FILES["files"]["tmp_name"])){
        $stored_path = "../upload/" .basename($_FILES["files"]["name"]);
        if(move_uploaded_file($_FILES["files"]["tmp_name"], $stored_path)){
            echo "Stored in: " . $stored_path ."<br />";
        }else{
            die("Stored failed: file save error.");
        }
    }else{
        die("Stored failed: no post.");
    }
}

$uploadpath = $stored_path;

echo "上传文件信息：" ."<br />";
echo "文件名：" .$filename ."<br />";               // 上传文件名称
echo "文件类型：" .$filetype ."<br />";             // 上传文件类型
echo "文件大小：" .($filesize / 1024) ."Kb<br />";  // 上传文件大小
echo "上传人：" .$username ."<br />";               // 上传人
echo "上传时间：" .$uploadtime ."<br />";           // 上传时间
echo "上传路径：" .$uploadpath ."<br />";           // 上传路径


// 获取最大 fileId
$sql = "SELECT max(fileId) from upload";
$retval = mysqli_query($conn, $sql);
$retarr = mysqli_fetch_array($retval, MYSQLI_NUM);
$fileId = $retarr[0] + 1;



// 将数据插入到mysql 数据库
$sql = "INSERT INTO upload ".
        "(fileId, filename, filetype, filesize, username, uploadtime, uploadpath) ".
        "VALUES ".
        "('$fileId', '$filename', '$filetype', '$filesize', '$username', '$uploadtime', '$uploadpath') ";

$retval = mysqli_query($conn, $sql);
if(!$retval){
    die('无法插入数据  ' .mysqli_error($conn));
}
echo '插入数据成功 <br />';

// 睡眠
/*echo "暂停20s...<br />";
sleep(20);
echo "暂停结束<br />";*/

// 弹出框
// OutScript("alert('this is javascript');");

// 关闭数据库连接
// mysqli_close($conn);

// 跳转到 show.php
echo "<meta http-equiv=\"refresh\" content=\"0;url='show.php'\" />";


?>
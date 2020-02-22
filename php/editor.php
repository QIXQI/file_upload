<?php
error_reporting(0);
$REAL_PASS =  'a17411419150580';

$password = $_POST['password'];
if ($password != $REAL_PASS){
    die('error: 密钥错误');
}

$fileId = $_POST['fileId'];
$newName = $_POST['newName'];

include_once('connect.php');

// 获取原文件信息
$sql = 'select filename, uploadpath from upload where fileId = '.$fileId;
$retval = mysqli_query($conn, $sql) or die('查询原文件名失败 '. mysqli_error($conn));
$result = mysqli_fetch_array($retval, MYSQLI_ASSOC);
$oldName = $result['filename'];
$oldPath = $result['uploadpath'];


// 更新数据库
$newPath = substr($oldPath, 0, strrpos($oldPath, '/')+1) .$newName;
$sql = "update upload set filename = '$newName', uploadpath = '$newPath' where fileId = $fileId";
$retval = mysqli_query($conn, $sql) or die('更新数据库失败 ' .mysqli_error($conn));
// echo '更新数据库成功 <br />';

// 更新文件
$result = rename('../upload/'.$oldName, '../upload/'.$newName);
if (!$result){
    die('更新文件失败');
}
// echo '更新文件成功<br />';
echo 'success';


// 关闭连接
mysqli_free_result($retval);
mysqli_close($conn);


// 利用 js 跳转到原来的页面
// echo '<script language="javascript" type="text/javascript">';
// echo 'console.log("编辑成功");';
// echo 'window.history.back(-1);';
// echo '</script>';
?>
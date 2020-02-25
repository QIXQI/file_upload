<?php
/*
    1. header: location和":"号间不能有空格，否则不会跳转; 在用header前不能有任何的输出；header后的PHP代码还会被执行。
    2. sleep() 是暂停多少秒，　usleep() 是暂停多少微秒
*/
error_reporting(0);
$REAL_PASS = 'a17411419150580';

$fileId = $_POST['fileId'];
$password = $_POST['password'];

// 验证密钥
if ($password != $REAL_PASS){
    die('error: 密钥错误');
}

include_once('connect.php');
 
// 获取文件名
$sql = "select filename from upload where fileId = $fileId";
$retval = mysqli_query($conn, $sql) or die('查询文件名失败 '. mysqli_error($conn));
$result = mysqli_fetch_array($retval, MYSQLI_ASSOC);
$filename = $result['filename'];

// 数据库条目删除
$sql = "delete from upload where fileId = $fileId";
$retval = mysqli_query($conn, $sql) or die('删除条目失败: '.mysqli_error($conn));;
// echo '删除条目成功'.'<br />';

// fileId 重新排序
$sql = '
    alter table upload drop fileId;
    alter table upload add fileId int(11) first;
    alter table upload modify column fileId int(11) not null auto_increment, add primary key(fileId);
';
$retval = mysqli_multi_query($conn, $sql) or die('fileId 重新排序失败：'.mysqli_error($conn));      // mysqli_query 报错，只能查询一条语句
while (mysqli_next_result($conn)){  // mysqli_multi_query 似乎异步
    if ($result = mysqli_store_result($conn)){
        mysqli_free_result($result);    // 释放内存
    }
}


// 删除文件
$filepath = '../upload/'.$filename;
$result = unlink($filepath);
if (!$result){
    die('文件删除失败');
}
// echo '文件删除成功';
echo 'success';


// 关闭连接
mysqli_free_result($retval);        // [warning] 不是mysqli_result
mysqli_close($conn);


// 暂停两秒
// sleep(2);

// 利用 js 跳转到原来的页面
// echo '<script language="javascript" type="text/javascript">';
// echo 'console.log("删除成功");';
// echo 'alert("删除成功")';       // 会阻断返回页面
// echo 'window.history.back(-1);';
// echo '</script>';
?>
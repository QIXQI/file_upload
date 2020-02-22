<?php

error_reporting(0);
include_once('connect.php');

// 创建upload表
$sql = "
create table if not exists upload(
    `fileId` int(11) auto_increment primary key,
    `filename` varchar(255) not null unique,
    `filetype` varchar(255),
    `filesize` varchar(255) not null,
    `username` varchar(255) not null,
    `uploadtime` datetime not null,
    `uploadpath` varchar(255) not null
);";
$retval = mysqli_query($conn, $sql) or die('创建upload表失败 ' .mysqli_error($conn));
echo '创建表upload成功'.'<br />';

// 关闭连接
mysqli_free_result($retval);
mysqli_close($conn);

?>

<?php
error_reporting(0);

// mysql 信息
$dbhost = 'localhost: 3306';
$dbuser = 'root';
$dbpass = '1214';
$dbname = 'qixqi_web';

// 连接
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('数据库连接失败: ' .mysqli_error($conn));
// 设置数据库编码格式
mysqli_query($conn, 'set names utf8');
// echo '数据库连接成功'.'<br />';
?>

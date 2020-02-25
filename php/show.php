<?php

error_reporting(0);
include_once('connect.php');

$sql = 'SELECT fileId, filename, filetype, filesize, username, uploadtime, uploadpath from upload order by fileId desc';
$retval = mysqli_query($conn, $sql);
if(!$retval){
    die('无法读取数据 ' . mysqli_error($conn));
}

echo '<h2>Welcome to UPLOAD.php<h2>';
echo '<table border="1"><tr><td>fileId</td><td>文件名</td><td>文件类型</td><td>文件大小</td>
    <td>上传人</td><td>上传时间</td><td>上传路径</td><td>下载</td></tr>';
while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)){
    // $download = '..' .substr($row['uploadpath'], 30);
    $download = $row['uploadpath'];
    // str_replace('/usr/share/nginx/html/', '', $download);
    // delete($download, 0, 22);
    // echo $download;
    echo "<tr><td>{$row['fileId']}</td> ".
    "<td>{$row['filename']}</td>".
    "<td>{$row['filetype']}</td>".
    "<td>{$row['filesize']}</td>".
    "<td>{$row['username']}</td>".
    "<td>{$row['uploadtime']}</td>".
    "<td>{$row['uploadpath']}</td>".
    "<td><font color='blue'><a href='{$download}' download=''><label>下载</label></a></font></td>".
    "</tr>";
}
echo '</table>';

mysqli_free_result($retval);
mysqli_close($conn);

// 引入html 代码
echo "
    <!DOCTYPE html>
    <html lang='zh'>
        <head>
            <meta charset='utf8' />
            <title>Welcome to UPLOAD</title>
        </head>
        <body>
            <audio src='../audio/晴天.mp3' id='music' autoplay loop>
                <p>This browser does not support our audio format.</p>
            </audio>
            <input type='image' id='play' src='../image/play.png' alt='播放/暂停' title='播放/暂停'/>
            <input type='image' id='download' src='../image/download.png' alt='下载' title='下载' />
            <input type='image' id='editor' src='../image/editor.png' alt='编辑' title='编辑' />
            <input type='image' id='delete' src='../image/delete.png' alt='删除' title='删除' />
        </body>
    </html>
";

echo "<link rel='stylesheet' type='text/css' href='../css/show.css' />";
echo "<script type='text/javascript' src='../js/jquery-3.4.1.min.js'></script>";
echo "<script type='text/javascript' src='../js/canvas-nest.min.js'></script>";
echo "<script type='text/javascript' src='../js/show.js'></script>";
?>

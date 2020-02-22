## 文件在线管理系统



### Problem
1. 上传mp3文件时，文件的专辑图片怎么没有上传
2. Warning: POST Content-Length of 9440070 bytes exceeds the limit of 8388608 bytes in Unknown on line 0 或者 上传文件size=0
    * 修改 php.ini文件
    * 提高 upload_max_filesize 和 post_max_size 大小
    * 重启 Apache / Nginx
3. show.php 背景乐：那些花儿 - 朴树.mp3
4. mysql 在插入数据时，自增的键在插入失败时，fileId 仍会自增，数据不会插入，造成 fileId不连续
    * 每次插入数据获取最大 fileId
    * 插入数据时 fileId = Max(fileId) + 1;
5. 更改文件名时，更改前后使用mime_conten_type(file)检测文件类型没有变化，但是上传前更改文件名，$_FILES['file']['type'] 检测到的文件类型会改变
    * 使用 fileinfo 扩展检测试试
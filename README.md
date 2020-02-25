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
6. 远程主机拒绝 httpd 的方式去创建目录，php/upload.php 中检测'../upload'目录不存在时，创建不了，似乎是远程无法写操作文件系统
    * 解决方法
        * 在 upload_file 根目录下手动创建 upload 目录
        * 执行 chmod 777 upload，赋予写权限
    * 后续尝试解决方法
        * chcon -R -t httpd_sys_content_rw_t /path/to/www/dir/for/rw，但是每次添加新的目录后都需要重新执行该命令，麻烦啊
        * https://blog.csdn.net/u012560213/article/details/80228050
7. 可以尝试使用 head方法，使用post方法需要每次访问都要上传文件，异常情况如文件上传过，造成带宽的浪费
8. mariadb 表插入中午数据失败
    * 修改 /etc/my.cnf.d/client.cnf，在[client]字段加入  default-character-set=utf8
    * 修改 /etc/my.cnf.d/server.cnf，在[mysqld]字段加入 character-set-server=utf8
    * 重启 mariadb，systemctl restart mariadb
    * 删除数据库qixqi_web，drop database qixqi_web，一定要删除重新创建
    * 重新创建数据库qixqi_web，create database qixqi_web
    * 初始化，访问 init.php
8. 删除操作时，应该将fileId 重新刷新
9. 编辑操作或删除操作完成后，刷新页面时应该保存当前操作类型
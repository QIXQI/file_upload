use qixqi_web;      -- 数据库

create table if not exists upload(
    `fileId` int(11) auto_increment primary key,
    `filename` varchar(255) not null unique,
    `filetype` varchar(255),
    `filesize` varchar(255) not null,
    `username` varchar(255) not null,
    `uploadtime` datetime not null,
    `uploadpath` varchar(255) not null
);
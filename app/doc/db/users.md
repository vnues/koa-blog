# users 表

```sql
CREATE TABLE users (
   id bigint(20) NOT NULL AUTO_INCREMENT,
   name varchar(20) NOT NULL,
   password varchar(32) NOT NULL,
   email varchar(30) NOT NULL,
   avatar varchar(255) DEFAULT NULL,
   level int(10)  NOT NULL DEFAULT 1,
   rights varchar(20) DEFAULT NULL,
   registration_time datetime NOT NULL,
   phone bigint(20) NOT NULL,
   PRIMARY KEY ( id ),
   KEY name ( name ),
   KEY email ( email ),
   KEY phone ( phone )
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
```

## https://zhangjia.io/852.html

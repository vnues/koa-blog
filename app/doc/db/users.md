# users 表

```sql
CREATE TABLE users (
   id bigint(20) NOT NULL AUTO_INCREMENT,
   ip varchar(20) NOT NULL,
   name varchar(20) NOT NULL,
   password varchar(15) NOT NULL,
   email varchar(30) NOT NULL,
   photo varchar(255) NOT NULL,
   level varchar(20) NOT NULL,
   rights varchar(20) NOT NULL,
   registration_time datetime NOT NULL,
   birthday date DEFAULT NULL,
   age tinyint(4) DEFAULT NULL,
   telephone_number int(11) NOT NULL,
   nickname varchar(20) NOT NULL,
   PRIMARY KEY ( id ),
   KEY user_name ( name ),
   KEY user_nickname ( nickname ),
   KEY user_email ( email ),
   KEY user_telephone_number ( telephone_number )
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
```

## https://zhangjia.io/852.html

drop table blocked_ads;

create table blocked_ads (
    ID INTEGER PRIMARY KEY   AUTOINCREMENT,
    user_id int,
    ad_id varchar(20)
);

drop table articles;

create table articles (
    ID INTEGER PRIMARY KEY   AUTOINCREMENT,
    tags varchar(255)
);


insert into blocked_ads (user_id, ad_id) values (1, "123");
insert into blocked_ads (user_id, ad_id) values (1, "456");
insert into blocked_ads (user_id, ad_id) values (2, "zzz");

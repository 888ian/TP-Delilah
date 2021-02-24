use delilah;

create table Orders 
(id_order int primary key auto_increment not null,
time date default CURRENT_TIMESTAMP,
order_number varchar(70),
description varchar(70),
direction varchar(70),
id_user int,
id_status int,
id_pay_meth int,
foreign key (id_user) references Users(id_user),
foreign key (id_status) references Status(id_status),
foreign key (id_pay_meth) references Payment_Method(id_pay_meth))

drop table Orders

create table Users 
(id_user int primary key auto_increment not null,
username varchar(70),
name_surename varchar(70),
email varchar(70) unique,
phone varchar(20),
adress varchar(70),
pass varchar(70),
id_rol int,
foreign key(id_rol) references Roles(id_rol) )

drop table Users 

create table Status (
id_status int primary key auto_increment not null,
status varchar(70))

create table Products_In_Order (
id_products_in_order int primary key auto_increment not null,
id_product int,
id_order int,
foreign key(id_product) references Products(id_product),
foreign key(id_order) references Orders(id_order))


create table Payment_Method (
id_pay_meth int primary key auto_increment not null,
pay_meth varchar(70))

create table Roles (
id_rol int primary key auto_increment not null,
name varchar(70))

create table Products (
id_product int primary key auto_increment not null,
name varchar(70),
price double)


create table Favorites (
id_favorites int primary key auto_increment not null,
id_user int,
id_product int,
foreign key(id_user) references Users(id_user),
foreign key(id_product) references Products(id_product))
use delilah;

create table Orders 
(id_order int primary key auto_increment not null,
time date default CURRENT_TIMESTAMP,
order_number int auto_increment,
description varchar(70),
direction varchar(70),
id_user int,
id_status int,
id_pay_meth int,
foreign key (id_user) references Users(id_user),
foreign key (id_status) references Status(id_status),
foreign key (id_pay_meth) references Payment_Method(id_pay_meth))

insert into orders (order_number , description, direction, id_user, id_status, id_pay_meth)
values (10, "traer mas salsa", "lavalle 3000", 5, 1, 1)

drop table orders 

delete from orders 


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

insert into users (username, name_surename, email, phone, adress, pass, id_rol)
values ("usuario", "ian wohlgemuth", "ianwohlgemuth@gmail.com", "1551363707", "melo 2829", "789123", 1)

drop table Users 

delete from users 


create table Status (
id_status int primary key auto_increment not null,
status varchar(70))

insert into status (status)
values ("Cocinando tu comida")


create table Products_In_Order (
id_products_in_order int primary key auto_increment not null,
id_product int,
id_order int,
foreign key(id_product) references Products(id_product),
foreign key(id_order) references Orders(id_order))



create table Payment_Method (
id_pay_meth int primary key auto_increment not null,
pay_meth varchar(70))

insert into payment_method (pay_meth)
values ("Efectivo")


create table Roles (
id_rol int primary key auto_increment not null,
name varchar(70))

insert into roles (name)
values ("admin")



create table Products (
id_product int primary key auto_increment not null,
name varchar(70),
price double)

insert into products (name, price)
values ("Hamburguesa Simple", "250")



create table Favorites (
id_favorites int primary key auto_increment not null,
id_user int,
id_product int,
foreign key(id_user) references Users(id_user),
foreign key(id_product) references Products(id_product))



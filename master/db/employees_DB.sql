drop database if exists employees;
create database employees;
use employees;

create table department (
    id int unsigned auto_increment,
    name varchar(30) unique not null,
    primary key (id)
);

create table role (
    id int unsigned auto_increment,
    title varchar(30) unique not null,
    salary decimal unsigned not null,
    department_id int unsigned not null,
    constraint fk_department foreign key (department_id) references department(id) on delete cascade,
    primary key (id)
);

create table employee (
    id int unsigned auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int unsigned not null,
    manager_id int unsigned,
    constraint fk_manager foreign key (manager_id) references employee(id) on delete set null,
    primary key (id)
);


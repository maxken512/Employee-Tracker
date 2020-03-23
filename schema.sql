DROP DATABASE IF EXISTS employeesDb;
CREATE DATABASE employeesDb;
USE employeeDb;

CREATE TABLE department(
id int not null auto_increment,
department varchar(30) not null,
primary key (id)
);

CREATE TABLE position(
id int not null auto_increment,
roleTitle varchar(45) not null,
salary decimal (50, 2) not null,
department_id int not null,
primary key (id),
foreign key (department_id) REFERENCES(department)
);

CREATE TABLE employee(
id int not NULL,
firstName varchar(30) not null,
lastName varchar (30) not null,
role_id int not null,
managerId int,
FOREIGN KEY(roleId) REFERENCES position(id),
FOREIGN KEY(managerId) REFERENCES position(id),
PRIMARY KEY (id)
);

USE employeesDb

INSERT INTO department (department_type) VALUES ("Sales");
INSERT INTO department (department_type) VALUES ("Engineering");
INSERT INTO department (department_type) VALUES ("Finance");
INSERT INTO department (department_type) VALUES ("Legal");

INSERT INTO position(title, salary, role_id) VALUES ("Sales Team", 75000.00, 1);
INSERT INTO position(title, salary, role_id) VALUES ("Sales Lead", 110000.00, 1); 
INSERT INTO position(title, salary, role_id) VALUES ("Engineer", 100000, 2); 
INSERT INTO position(title, salary, role_id) VALUES ("Senior Engineer", 150000.00, 2); 
INSERT INTO position(title, salary, role_id) VALUES ("Accountant", 90000.00, 3);
INSERT INTO position(title, salary, role_id) VALUES ("CFO", 500000.00, 3);
INSERT INTO position(title, salary, role_id) VALUES ("Lawyer", 225000.00, 4);

INSERT INTO employee(firstName, lastName, department_id) VALUES ("Max", "Kennedy", 3)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Bob", "Loblaw", 7)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Erlich", "Bachman", 1)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Bertram", "Gilfoyle", 4)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Dinesh", "Chugtai", 4)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Monica", "Hall", 2)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Jared", "Dunn", 6)
INSERT INTO employee(firstName, lastName, department_id) VALUES ("Nelson", "Bighetti", 5)
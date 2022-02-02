INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Finance"),
       (3, "Legal"),
       (4, "Sales");
    
       
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 4),
       (2, "Sales Person", 90000, 4),
       (3, "Software Engineer", 150000, 1),
       (4, "Lawyer", 300000, 3),
       (5, "Accountant Manager", 250000, 2);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Johnny", 3, 1),
       (2, "Marcus", "Marcos", 4, 2),
       (3, "Jack", "Smack", 5, 3),
       (4, "Jagged", "Comet", 1, 4),
       (5, "North", "Pole", 2, 5);
       

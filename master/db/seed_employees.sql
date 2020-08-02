use employees;

INSERT INTO department
    (name)
VALUES
    ('Product Zone'),
    ('Genius Bar'),
    ('Business'),
    ('Genius Bar Admin'),
    ('Back of House'),
    ('Visuals'),
    ('Flag Leader Team');

    

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Specialist', 25000, 1),
    ('Expert', 30000, 1),
    ('Technical Specialist', 20000, 2),
    ('Technical Expert', 25000, 2),
    ('Genius', 30000, 2),
    ('Business Specialist', 40000, 3),
    ('Admin', 30000, 4),
    ('Back of House Specialist', 20000, 5),
    ('Visuals Specialist', 25000, 6),
    ('Flag Leader', 150000, 7);
    


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Daniel', 'Adams', 1, 1),
    ('Danny', 'Springfield', 2, 1),
    ('Michael', 'Li', 3, 1),
    ('Kevin', 'Del Gato', 4, 1),
    ('Karen', 'Beltran', 5, 1),
    ('Pat', 'Cooney', 6, 1),
    ('Roy', 'Michaels', 7, 1),
    ('David', 'Guam', 8, 1),
    ('Nick', 'Hendricks', 9, 1),
    ('Jeff', 'Zweiman', 10, null);

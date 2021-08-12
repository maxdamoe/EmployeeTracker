INSERT INTO Department (name)
VALUES 
    ('Sales'),
    ('Adminstration'),
    ('Compliance'),
    ('Accounting'),
    ('Research & Development'),
    ('Business Development'),
    ('Software Engineering'),
    ('Management');


INSERT INTO Role (title, salary, dept_id)
VALUES
    ('Administrative Assistant', 35,000, 1),
    ('Junior Software Engineer', 80,000, 2),
    ('Senior Accountant', 120,000, 3),
    ('Business Development Associate', 100000, 4),
    ('Sales Development Rep', 60,000, 5)
    ('Head of Global Markets', 200,000, 7);


    
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Paul', 'lutlenut', 1, 102),
  ('Harry', 'hiderboggen', 2, NULL),
  ('John', 'Johnson', 3, 442),
  ('Max', 'Seagull', 4, 657),
  ('Carrie', 'Fisher', 5, NULL),
  ('Donna', 'Spalding', 6, 600),
  ('Matthew', 'Sutherland', 7, NULL),
  ('Kurtis', 'Bradbury', 7, NULL);
 
 

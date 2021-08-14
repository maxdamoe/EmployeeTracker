
CREATE TABLE Department (
  id INTEGER PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE _Role (
  id INTEGER PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INTEGER,
);

CREATE TABLE Employee (

  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  
);

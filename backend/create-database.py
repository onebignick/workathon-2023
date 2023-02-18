import sqlite3
con = sqlite3.connect("database.db")

cur = con.cursor()

cur.execute('''CREATE TABLE IF NOT EXISTS Roles (
    id INTEGER PRIMARY KEY,
    role TEXT NOT NULL UNIQUE
)''')
            
cur.execute('''CREATE TABLE IF NOT EXISTS Experience (
    id INTEGER PRIMARY KEY,
    experience TEXT NOT NULL UNIQUE
)''')
            
cur.execute('''CREATE TABLE IF NOT EXISTS Users  (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    role_id INTEGER NOT NULL REFERENCES Roles (id),
    experience_id INTEGER NOT NULL REFERENCES Experience (id)
)''')
            
con.commit()

cur.execute('''INSERT INTO Roles (role) VALUES 
    ('Jobseeker'), 
    ('Employer')
''')
            
cur.execute('''INSERT INTO Experience (experience) VALUES 
    ('Intern'), 
    ('Junior'), 
    ('Mid'), 
    ('Senior'), 
    ('Manager'), 
    ('Director')
''')
            
con.commit()

cur.close()

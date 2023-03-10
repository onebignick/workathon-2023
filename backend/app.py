from flask import Flask, request, abort, session
from flask_cors import CORS
import sqlite3
import bcrypt
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from datetime import timedelta

app = Flask(__name__)
app.secret_key = "secret"
#------------------------------------END OF IMPORTS-----------------------------------

#------------------------------------START OF MIDDLEWARE-------------------------------
CORS(app)
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin):
    def __init__ (self, id):
        self.id = id

@login_manager.user_loader
def user_loader(id):
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    user_id = cur.execute('''SELECT id FROM Users WHERE id = ?''', [int(id)]).fetchone()
    if (user_id):
        return User(str(user_id[0]))
    return 
#------------------------------------END OF MIDDLEWARE----------------------------

# -----------------------------------START OF ROUTES----------------------------
@app.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    bytes = password.encode('utf-8')

    con = sqlite3.connect("database.db")
    cur = con.cursor()
    result = cur.execute('''SELECT id, password FROM Users WHERE username = ?''', [username]).fetchone()
    con.commit()
    con.close()

    if result and bcrypt.checkpw(bytes, result[1]):
            user = User(str(result[0]))
            login_user(user, remember=True, duration=timedelta(hours=1))
            return "Authenticated", 200
    
    abort(401, description="Unauthenticated user")
    

@app.route('/signup', methods=['POST'])
def signup():
    user = request.json['userInfo']
    # Password encryption
    bytes = user['password'].encode('utf-8')
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(bytes, salt)

    con = sqlite3.connect("database.db")
    cur = con.cursor()
    try: 
        cur.execute('''INSERT INTO Users 
            (username, password, first_name, last_name, email, role_id, experience_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?)''', 
            [user['username'], hash, user['first_name'], user['last_name'], user['email'], user['role_id'], user['experience_id']]
        )
    except sqlite3.Error as err:
        print(err)
        abort(505, description="Error in registering a new user")
    else:
        con.commit()
        return "New user successfully registered", 201

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return "Successfully logged out", 200

@app.route('/user', methods=['GET'])
def user():
    pass

@app.route('/checkUser/<username>', methods=['GET'])
def checkUser(username):
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    result = cur.execute('''SELECT username FROM Users WHERE username = ?''', [username]).fetchone()
    if result:
        return result[0]
    return ""

@app.route('/roles', methods=['GET'])
def getAllRoles():
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    roles = cur.execute('''SELECT id, role FROM Roles''').fetchall()
    con.close
    return roles

@app.route('/experience', methods=['GET'])
def getAllExperience():
    con = sqlite3.connect("database.db")
    cur = con.cursor()
    roles = cur.execute('''SELECT id, experience FROM Experience''').fetchall()
    con.close
    return roles

# ----------------------------------------END OF ROUTES-----------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=3001)
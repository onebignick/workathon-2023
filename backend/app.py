from flask import Flask, request
from flask_cors import CORS
import sqlite3
import bcrypt

app = Flask(__name__)
#------------------------------------END OF IMPORTS-----------------------------------

#------------------------------------START OF MIDDLEWARE-------------------------------
CORS(app)
#------------------------------------END OF MIDDLEWARE----------------------------

# -----------------------------------START OF ROUTES----------------------------
@app.route('/login', methods=['POST'])
def login():
    pass

@app.route('/signup', methods=['POST'])
def signup():
    pass

@app.route('/logout', methods=['POST'])
def logout():
    pass

@app.route('/user', methods=['GET'])
def user():
    pass

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
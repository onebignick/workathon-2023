from flask import Flask, request
import bcrypt

app = Flask(__name__)
#------------------------------------END OF IMPORTS-----------------------------------

#------------------------------------START OF MIDDLEWARE-------------------------------

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

# ----------------------------------------END OF ROUTES-----------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=3001)
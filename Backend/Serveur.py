from flask import *
import sqlite3

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify("Hello Flask 👋")

@app.route("/register",methods=["POST"])
def register():
    pass





if __name__ == "__main__":
    app.run(debug=True)
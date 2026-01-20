from flask import *

app = Flask(__name__)

@app.route("/user/<int:id>")
def user(id):
    return jsonify(f"Utilisateur ID : {id}")

if __name__ == "__main__":
    app.run(debug=True)

from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    with open('data.txt') as file:
      todos = file.readlines()
      for todo in todos:
        print(todo)
      file.close()
    return "Open file"

@app.route("/add")
# post
def main():
    with open('data.txt') as file:
      todos = file.readlines()
      for todo in todos:
        todo.push(todo)
      file.close()
    return "Changing"


# @app.route("/delete/{id}")
# def delete()


# @app.route("/delete", method="POST")
# def delete()
from crypt import methods
from flask import Flask, request
import filesStorage
import os
app = Flask(__name__)

TODO_FILE_NAME = "data.txt"

@app.route("/")
def main():
  print("Кто-то запросил все позиции")
  todos = filesStorage.readFile(TODO_FILE_NAME)
  return str(todos)


@app.route("/add", methods=["POST"])
def add():
  print("Кто-то добавляет новые позиции")
  todo = request.get_data(as_text=True)
  status = filesStorage.appendToFile(TODO_FILE_NAME, todo)
  return status


@app.route("/delete", methods=["POST"])
def delete():
  print("Кто-то удаляет позицию")
  delTodo = request.get_data(as_text=True)
  changes = filesStorage.deleteFromFile(TODO_FILE_NAME, delTodo)
  return changes

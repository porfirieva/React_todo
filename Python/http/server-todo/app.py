from flask import Flask, request, jsonify
import src.filesStorage as filesStorage

app = Flask(__name__)

TODO_FILE_NAME = "src/db/data.txt"


@app.route("/")
def main():
    print("Кто-то запросил все позиции")
    todos = filesStorage.readFile(TODO_FILE_NAME)
    response = jsonify({'todos': todos})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/add", methods=["POST"])
def add():
    print("Кто-то добавляет новые позиции")
    todo = request.get_data(as_text=True)
    status = filesStorage.appendToFile(TODO_FILE_NAME, todo)
    response = jsonify({'status': status})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/delete", methods=["POST"])
def delete():
    print("Кто-то удаляет позицию")
    delTodo = request.get_data(as_text=True)
    changes = filesStorage.deleteFromFile(TODO_FILE_NAME, int(delTodo)-1)
    response = jsonify({'changes': changes})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/change", methods=["POST"])
def change():
    print("Кто-то меняет позицию")
    changeTodo = request.get_data(as_text=True)
    x = changeTodo.split('@')
    
    response = jsonify({'changes': "changes"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

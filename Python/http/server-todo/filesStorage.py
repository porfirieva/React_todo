def readFile(fileName):
    with open(fileName) as file:
      todos = file.readlines()
      file.close()
    return todos

def appendToFile(fileName, newTodo):
    with open(fileName, "a") as file:
      file.write(f"\n{newTodo}")
      file.close()
    return ("Добавлено успешно")

def deleteFromFile(fileName, toDelete):
    with open(fileName, "r+") as file:
      lastChange = file.readlines()
      file.seek(0)
      file.truncate()
      for number, change in enumerate(lastChange):
        if number not in [toDelete - 1]:
          file.write(change)
    return ("Позиция удалена")

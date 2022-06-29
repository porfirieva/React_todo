# В классе N человек.
# Каждый из них получил за урок по информатике оценку: 3, 4 или 5, двоек сегодня не было. 
# 
# Напишите программу, 
# которая получает список оценок - N чисел - и выводит на экран сообщение о том, 
# кого сегодня больше: отличников, хорошистов или троечников.
students = int(input('Сколько человек в классе? '))
three = 0
four = 0
five = 0

for student in range (1, students + 1):
  print('Какую оценку получил', student, end = ' ')
  grade = int(input('ученик? '))
  if grade == 3:
    three += 1
  elif grade == 4:
    four += 1
  else:
    five += 1
all_grid = max(three, five, four)
print('Сегодня больше', end = ' ')

if all_grid == three:
  print('троечников.')
elif all_grid == four:
  print('хорошистов.')
else:
  all_grid == five
  print('отличников.')
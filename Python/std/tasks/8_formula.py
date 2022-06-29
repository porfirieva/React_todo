#Дано число x.
#Напишите программу для вычисления следующего выражения 
# ((x-1)(x-3)(x-7)…(x-63)/
# ((x-2)(x-4)(x-8)…(x-64)) 

x = int(input('Какое число подставить в формулу? '))

numerator = 1
denominator = 1
factor_numerator = 0
factor_denominator = 0
step = 1

for counter in range(0, 6):
  factor_numerator +=  step
  factor_denominator += step
  step *= 2
  numerator *= (x - factor_numerator)
  denominator *= (x - (factor_denominator + 1))
print(numerator / denominator)
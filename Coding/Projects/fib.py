def fib(n):
     a, b = 0, 1
     while a < n:
         print(a, end=' ')
         a, b = b, a+b
     print()
num = int(input("Up to:\n"))
fib(num)
input("Finish Fib:\n")

def bin(n):
     a = 1
     while a < n:
         print(a, end=' ')
         a = a * 2
     print()
num = int(input("Up to:\n"))
bin(num)
input("Finish Bin:\n")
exit = input("Exit Progam:\n")
if (exit=="nah"):
    print("wdym?")
    input("Actually Exit:\n")
else:
    quit()

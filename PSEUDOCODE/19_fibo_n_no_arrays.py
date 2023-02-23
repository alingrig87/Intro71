n = int(input("Introduceti un numar pozitiv"))

a = 0
b = 1
tmp = 0

print(a)

while tmp <= n:
    print(b)
    tmp = a + b
    a = b
    b = tmp
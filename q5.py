'''
Implement a program that takes 3 users  inputs from the terminal or the Browser, 
 and stores them in three variables. 
Return the largest of the three. Do this without using the the inbuilt max () function!

'''
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))

if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c

print(f"The largest number is {largest}")
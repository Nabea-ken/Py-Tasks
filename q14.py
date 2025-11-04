'''
Write a program that takes input of 2 values and adds them. 
The program should only accept numbers and floats only or
 otherwise display an error “invalid character entered” and take the user to re-enter the inputs .

'''
while True:
    try:
        a = float(input("Enter first number: "))
        b = float(input("Enter second number: "))
        print(f"The sum is {a + b}")
        break
    except ValueError:
        print("Invalid character entered. Try again.")
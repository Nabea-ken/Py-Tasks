'''
Prompt the user for a number either on a form input or the terminal. 
Depending on whether the number is even or odd, display  either “odd” or “even” to the user.

If the number is a multiple of 4, print out “divisible by 4”.

'''

num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even")
else:
    print("Odd")

if num % 4 == 0:
    print("Divisible by 4")
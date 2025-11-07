# write a python function to create and print a list where the values are the squares of numbers 
# between 1 and 30 ( both included)

def print_square_list():
    squares = []
    for i in range(1, 31):
        squares.append(i ** 2)
    print("List of squares from 1 to 30:")
    print(squares)

print_square_list()

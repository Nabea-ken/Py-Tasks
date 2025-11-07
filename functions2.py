# write a python program to print the even numbers from a given list
def print_even_numbers(numbers):
    even_numbers = []
    for num in numbers:
        if num % 2 == 0:
            even_numbers.append(num)
        return even_numbers

list = [10, 21, 4, 45, 66, 93, 11]
even=print_even_numbers(list)
print(even)




# Write a program that prints the largest of 4 inputs taken as input from a user.

nums = []
for i in range(4):
    num = float(input(f"Enter number {i+1}: "))
    nums.append(num)

largest = nums[0]
for n in nums:
    if n > largest:
        largest = n

print(f"The largest number is {largest}")
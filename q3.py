'''
Write a program which gets a phone number from a form input or terminal. 
Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or 
 1.. Convert the number to start with +254… 
e.g if a user enters “0712345678”, the program should display “+254712345678”
e.g if a user enters “0112345678”, the program should display “+254112345678”
e.g if a user enters “712345678”, the program should display “+254712345678”

'''
phone = input("Enter your phone number: ").strip()

if phone.startswith("+254"):
    formatted = phone
elif phone.startswith("0"):
    formatted = "+254" + phone[1:]
elif phone.startswith("7"):
    formatted = "+254" + phone
elif phone.startswith("1"):
    formatted = "+254" + phone
elif phone.startswith("254"):
    formatted = "+" + phone
else:
    formatted = "Invalid number format"

print(f"Formatted number: {formatted}")
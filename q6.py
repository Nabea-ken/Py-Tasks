'''
Write a program that lets the user input a password. 
Give them only 4 attempts to check the passwords entered against “admin@123”. 
If the password is correct access is granted. After you show them a message , the account is blocked.

'''
password = "admin@123"
attempts = 4

while attempts > 0:
    entered = input("Enter password: ")
    if entered == password:
        print("Access Granted")
        break
    else:
        attempts -= 1
        print(f"Wrong password. {attempts} attempts left.")

if attempts == 0:
    print("Account Blocked.")
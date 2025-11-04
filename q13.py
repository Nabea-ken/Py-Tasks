'''
Write a program that takes the email and password as input from a user 
 checks if they are equal to “admin@mail.com” and password is “Admin@123” , 
if so then print  “Login is Successful” and if not print “Invalid username or password”.
 ONLY accept 3 tries after which it notifies you that you have been blocked.

'''
email = "admin@mail.com"
password = "Admin@123"
attempts = 3

while attempts > 0:
    user_email = input("Enter email: ")
    user_pass = input("Enter password: ")

    if user_email == email and user_pass == password:
        print("Login is Successful")
        break
    else:
        attempts -= 1
        print(f"Invalid credentials. {attempts} attempts left.")

if attempts == 0:
    print("Account blocked.")
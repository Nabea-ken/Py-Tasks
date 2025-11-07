'''
---Use functions to create a bank program:
1.That can create an account
2.Deposit an amount
3.Withdraw an amount
4.Check balance
5.Close/delete an account

'''
# Bank Program
bank_ke= {}

def create_account():
    account_number = input("Enter new account number: ")
    if account_number in bank_ke:
        print("Account already exists!")
    else:
        name = input("Enter account holder name: ")
        bank_ke[account_number] = {"name": name, "balance": 0.0}
        print(f"Account created successfully for {name}.")
    
    return (account_number,name,"balance")

new_user = create_account()
print("Account details:",new_user)


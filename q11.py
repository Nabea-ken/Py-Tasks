'''
Write a program that takes the date of birth of a person 
 and outputs the age in terms of years,months,days TODAY.datetime

'''

from datetime import datetime

dob_input = input("Enter date of birth (YYYY-MM-DD): ")
dob = datetime.strptime(dob_input, "%Y-%m-%d")
today = datetime.now()

age_days = (today - dob).days
years = age_days // 365
months = (age_days % 365) // 30
days = (age_days % 365) % 30

print(f"Age: {years} years, {months} months, {days} days")
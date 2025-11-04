'''
Write a program that takes input of someone's basic salary and benefits, 
 adds them to find the gross salary then uses  the gross salary to find the NHIF. 

'''
basic = float(input("Enter basic salary: "))
benefits = float(input("Enter benefits: "))
gross = basic + benefits

if gross <= 5999:
    nhif = 150
elif gross <= 7999:
    nhif = 300
elif gross <= 11999:
    nhif = 400
elif gross <= 14999:
    nhif = 500
elif gross <= 19999:
    nhif = 600
else:
    nhif = 750

print(f"Gross Salary: {gross}")
print(f"NHIF Deduction: {nhif}")



'''
Continue with the program above, then use  the gross salary to find the NSSF. 
To find the Kenya NSSF Rate  using 6% of the Gross Salary.
 BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 

'''

nssf = 0.06 * min(gross, 18000)
print(f"NSSF Deduction: {nssf}")


'''
Continue with the same program and calculate an individual’s NHDF using:
 i.e NHDF = gross_salary *  0.015

'''

nhdf = gross * 0.015
print(f"NHDF Deduction: {nhdf}")


'''
Calculate the taxable income.
i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

'''

taxable_income = gross - (nssf + nhdf + nhif)
print(f"Taxable income: {taxable_income}")

'''
Continue with the same program and find the person's PAYEE using the taxable income above.

'''

if taxable_income <= 24000:
    payee = taxable_income * 0.1
elif taxable_income <= 32333:
    payee = 2400 + (taxable_income - 24000) * 0.25
else:
    payee = 2400 + 2083.25 + (taxable_income - 32333) * 0.3

print(f"PAYEE (Tax): {payee}")


'''
Continue with the same program and calculate an individual’s Net Salary using:
 net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

'''

net_salary = gross - (nhif + nhdf + nssf + payee)
print(f"Net Salary: {net_salary}")
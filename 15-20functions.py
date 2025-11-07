# Write a program that takes input of someone's basic salary
# and benefits, adds them to find the gross salary then uses
# the gross salary to find the NHIF. To find the Kenya NHIF Rate using

basic_salary = float(input("Enter basic salary: "))
benefits = float(input("Enter benefits: "))

def get_gross_salary(basic,benefits):
    return basic + benefits

def get_nhif(gross):
    if gross >= 0 and gross <= 5999:
        nhif = 150
    elif gross >= 6000 and gross <= 7999:
        nhif = 300
    elif gross >= 8000 and gross <= 11999:
        nhif = 400
    elif gross >= 12000 and gross <= 14999:
        nhif = 500
    elif gross >= 15000 and gross <= 19999:
        nhif = 600
    elif gross >= 20000 and gross <= 24999:
        nhif = 750
    elif gross >= 25000 and gross <= 29999:
        nhif = 850
    elif gross >= 30000 and gross <= 34999:
        nhif = 900
    elif gross >= 35000 and gross <= 39999:
        nhif = 950
    elif gross >= 40000 and gross <= 44999:
        nhif = 1000
    elif gross >= 45000 and gross <= 49999:
        nhif = 1100
    elif gross >= 50000 and gross <= 59999:
        nhif = 1200
    elif gross >= 60000 and gross <= 69999:
        nhif = 1300
    elif gross >= 70000 and gross <= 79999:
        nhif = 1400
    elif gross >= 80000 and gross <= 89999:
        nhif = 1500
    elif gross >= 90000 and gross <= 99999:
        nhif = 1600
    else:
        nhif = 1700
    return nhif



gross_salary = get_gross_salary(basic_salary,benefits)
nhif = get_nhif(gross_salary)

print("Gross salary is Ksh. ",gross_salary)
print("NHIF is Ksh. ",nhif)

def get_nssf(gross):
    nssf = 0.06 * min(gross, 18000)
    return nssf

nssf = get_nssf(gross_salary)
print("NSSF Deductions:",nssf)

def get_nhdf(gross):
    nhdf = gross * 0.015
    return nhdf

nhdf = get_nhdf(gross_salary)
print("NHDF Deductions:",nhdf)

def get_taxable_income(gross):
    taxable_income = gross - (nssf + nhdf + nhif)
    return taxable_income

taxable_income = get_taxable_income(gross_salary)
print(f"Taxable income is: {taxable_income}")

def get_PAYE(taxable_income):
    if taxable_income <= 24000:
     payee = taxable_income * 0.1
    elif taxable_income <= 32333:
     payee = 2400 + (taxable_income - 24000) * 0.25
    else:
     payee = 2400 + 2083.25 + (taxable_income - 32333) * 0.3
    return payee

payee = get_PAYE(taxable_income)
print(f"PAYEE (Tax): {payee}")

def get_net_salary(gross):
    net_salary = gross - (nhif + nhdf + nssf + payee)
    return net_salary

net_salary = get_net_salary(gross_salary)
print("Your net salary is:",net_salary)


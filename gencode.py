import secrets
import string

def generate_beta_code():
    #alphanumeric, excluding ambiguous chars like 0, O, I, 1)
    chars = string.ascii_uppercase.replace('O', '').replace('I', '') + string.digits.replace('0', '').replace('1', '')
    
   #format ABCD-EFGH-IJKL
    code = ''.join(secrets.choice(chars) for _ in range(12))
    code = f"{code[:4]}-{code[4:8]}-{code[8:]}"
    return code

def generate_beta_codes(num_codes, filename="beta_codes.txt"):
    codes = set() 
    while len(codes) < num_codes:
        codes.add(generate_beta_code())
    with open(filename, 'w') as f:
        for code in codes:
            f.write(f"{code}\n")
    print(f"Generated {num_codes} beta codes and saved to {filename}")
generate_beta_codes(100)
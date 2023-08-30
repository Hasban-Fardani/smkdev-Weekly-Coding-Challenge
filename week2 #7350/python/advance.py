def check_prime(num: int) -> bool:
    if num == 2: 
        return True
    
    if num > 2:
        for i in range(2, num//2+1):
            # jika terdapat num yang habis membagi  
            if num % i == 0:
                return False
        # jika tidak ada 
        return True
    
    # ketika num <= 1
    return False


def main():
    start = int(input("start: ",))
    end = int(input("end: ",))

    for angka in range(start, end+1):
        if check_prime(angka):
            print(angka)

if __name__ == "__main__":
    main()
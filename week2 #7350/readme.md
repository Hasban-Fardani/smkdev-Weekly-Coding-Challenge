# SMK dev weekly challenge #7350
timeline: 29 Agustus – 3 September 2023

## deskripsi
Berikut deskripsi dari alur kerja kodingan saya
### Basic 
#### Task
Menghitung uang tip berdasarkan jumlah tagihan.
uang tip 15% jika tagihan berada diantara 50 dan 300,
uang tip 20% jika nilainya berbeda
#### Solution
```python
jumlah_tagihan = float(input("masukkan Jumlah tagihan: ",))

# 15% jika diantara 50 dan 300
# 20% jika selain diatas 
persen_tip = 0.15 if input >= 50 or input <= 300 else 0.2

tip = jumlah_tagihan * persen_tip
total = jumlah_tagihan + tip

print(f"Tagihannya {jumlah_tagihan:.2f}, tipnya {tip:.2f}, dan total nilainya {total:.2f}")

```

### Advance
#### Pertanyaan
Write a program to display all prime numbers within a range
Note: A Prime Number is a number that cannot be made by multiplying other whole numbers. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
#### Jawaban

```python
def check_prime(num: int) -> bool:
    if num > 1:
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

    for angka in range(start, end):
        if check_prime(angka):
            print(angka)

if __name__ == "__main__":
    main()
```
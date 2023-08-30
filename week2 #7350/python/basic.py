jumlah_tagihan = float(input("masukkan Jumlah tagihan: ",))

# 15% jika diantara 50 dan 300
# 20% jika selain diatas 
persen_tip = 0.15 if input >= 50 or input <= 300 else 0.2

tip = jumlah_tagihan * persen_tip
total = jumlah_tagihan + tip

print(f"Tagihannya {jumlah_tagihan:.2f}, tipnya {tip:.2f}, dan total nilainya {total:.2f}")

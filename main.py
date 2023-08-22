input_usr = int(input("masukkan angka: ",))

for i in range(input_usr, 0, -1):
    for j in range(i, 0, -1):
        print(j, " ", end="")
    print("")



package main

import "fmt"

// fungsi untuk menghitung cube (pangkat 3) dari sebuah angka
func cube(i uint) uint {
	return i * i * i
}

func main() {
	// definisi variable untuk input
	// karena angka pasti lebih dari 1 saya memakai tipe data uint
	var input uint
	fmt.Print("input_number = ")
	fmt.Scan(&input) // scan input user ke variabel input

	// looping dari 0 sampai input_number
	var i uint
	for i = 0; i <= input; i++ {
		// print current number dan hasil dari cube(number)
		fmt.Printf("Current number is : %d and the cube is %d", i, cube(i))
	}
}

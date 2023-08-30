package main

import "fmt"

func checkPrime(num int) bool {
	// untuk mengefisienkan waktu
	var end = num/2 + 1

	if num > 1 {
		for i := 2; i < end; i++ {
			if num%i == 0 {
				return false
			}
		}
		return true
	}

	// return false jika angka kurang dari 1
	return false
}

func main() {
	var start, end int

	fmt.Print("start: ")
	fmt.Scanln(&start)
	fmt.Print("end: ")
	fmt.Scanln(&end)
	fmt.Println("all Prime number: ")

	for num := start; num < end; num++ {
		if checkPrime(num) {
			fmt.Println(num)
		}
	}
}

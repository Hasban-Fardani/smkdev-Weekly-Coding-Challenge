package main

import "fmt"

func main() {
	var input int

	fmt.Print("masukkan angka: ")
	fmt.Scanln(&input)

	for i := input; i > 0; i-- {
		for j := i; j > 0; j-- {
			fmt.Printf(fmt.Sprint(j) + " ")
		}
		fmt.Println("")
	}
}

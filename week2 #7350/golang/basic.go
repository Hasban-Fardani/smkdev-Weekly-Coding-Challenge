package main

import "fmt"

func main() {
	var input float32
	var tip float32
	var total float32
	var strOutput string

	fmt.Print("masukkan Jumlah tagihan: ")
	fmt.Scanln(&input)

	if input >= 50 || input <= 300 {
		tip = input * 0.15
		total = input + tip
		strOutput = fmt.Sprintf("Tagihannya %.2f, tipnya %.2f, dan total nilainya %.2f", input, tip, total)
	} else {
		tip = input * 0.2
		total = input + tip
		strOutput = fmt.Sprintf("Tagihannya %.2f, tipnya %.2f, dan total nilainya %.2f", input, tip, total)
	}
	fmt.Println(strOutput)
}

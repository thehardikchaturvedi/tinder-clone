package main

import "fmt"

func main() {
	// number := 50
	// guess := 50
	// if guess < 1 {
	// 	fmt.Println("number must be greater than 1")
	// } else if guess < 1 || guess > 100 {
	// 	fmt.Println("Number must be less than 100")
	// } else {
	// 	if guess < number {
	// 		fmt.Println("Too low")
	// 	}
	// 	if guess > number {
	// 		fmt.Println("Too high")
	// 	}
	// 	if guess == number {
	// 		fmt.Println("Got It")
	// 	}
	// 	fmt.Println(number <= guess, number >= guess, number != guess)
	// }
	var a int = 42
	var b *int = &a
	fmt.Println(a, *b)
	a = 27
	fmt.Println(a, *b)
}

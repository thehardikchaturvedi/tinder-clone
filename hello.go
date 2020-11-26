package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// var name string = "Hardik"
	// var a, _ = fmt.Println(name)
	// fmt.Println(a)
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter Your Full Name")
	myName, _ := reader.ReadString('\n')
	fmt.Println(myName)
}

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    binary = "" + binary + "0"
    decimal = decimal * 2
    basic.showString(binary)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(decimal)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    binary = "" + binary + "1"
    decimal = decimal * 2 + 1
    basic.showString(binary)
})
let binary = ""
let decimal = 0
decimal = 0
binary = ""

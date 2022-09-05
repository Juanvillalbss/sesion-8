input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    Texto = "adios"
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(Texto)
})
let numero = 0
let Texto = ""
Texto = "Hola"
numero = 0

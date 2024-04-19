input.onButtonPressed(Button.A, function () {
    radio.sendString("4")
    serial.writeLine("left")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("2")
    serial.writeLine("back")
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("5")
    serial.writeLine("stoop")
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("3")
    serial.writeLine("right")
})
input.onGesture(Gesture.TiltRight, function () {
	
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("1")
    serial.writeLine("forwards")
})
radio.setGroup(5)
basic.forever(function () {
	
})

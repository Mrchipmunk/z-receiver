radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("Z", receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.showString("Z RECEIVER")
radio.setGroup(5)
serial.writeLine("Acceleration")

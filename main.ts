radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("Z", receivedNumber)
})
basic.showString("Z RECEIVER")
radio.setGroup(5)
serial.writeLine("Acceleration")

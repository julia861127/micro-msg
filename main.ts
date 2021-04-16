input.onButtonPressed(Button.A, function () {
    neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB).range(0, 30).showRainbow(0, 0)
    ix = 0
    basic.showIcon(IconNames.Yes)
})
let ix = 0
neopixel.create(DigitalPin.P16, 30, NeoPixelMode.RGB).range(0, 30).showRainbow(0, 0)
ix = 0
basic.showIcon(IconNames.Yes)
Grove.grove_servo(GroveAnalogPin.P0, 90)
basic.forever(function () {
    if (Grove.grove_ultrasonic(GrovePin.P1, DistanceUnit.cm) < 5) {
        ix += 1
        basic.showNumber(ix)
        neopixel.create(DigitalPin.P16, 30, NeoPixelMode.RGB).range(0, ix).showRainbow(1, 360)
        basic.pause(100)
        Grove.grove_servo(GroveAnalogPin.P0, 180)
        basic.pause(1000)
        Grove.grove_servo(GroveAnalogPin.P0, 90)
    } else {
        neopixel.create(DigitalPin.P16, 30, NeoPixelMode.RGB).range(0, ix).showRainbow(1, 360)
        Grove.grove_servo(GroveAnalogPin.P0, 90)
        basic.showNumber(ix)
    }
})

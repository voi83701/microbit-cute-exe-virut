input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    music.setVolume(255)
    music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    basic.showString("TOI CHONG MAT QUA!")
})
input.onButtonPressed(Button.A, function () {
    led.setBrightness(42)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    led.stopAnimation()
    basic.showIcon(IconNames.Heart)
    music.setVolume(255)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(255)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    basic.showNumber(input.runningTimeMicros())
    led.stopAnimation()
    basic.showArrow(ArrowNames.North)
    led.stopAnimation()
    basic.showArrow(ArrowNames.East)
    led.stopAnimation()
    basic.showArrow(ArrowNames.South)
    led.stopAnimation()
    basic.showArrow(ArrowNames.West)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(255)
})
basic.showString("HELLO")
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
music.setVolume(255)
basic.forever(function () {
    music.setVolume(255)
    basic.pause(1000)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(2000)
    basic.showString("NHIN CAI GI")
    basic.pause(500)
})

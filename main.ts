input.onPinPressed(TouchPin.P0, function () {
    if (Mode == 0) {
        music.playTone(131, music.beat(BeatFraction.Half))
    } else if (Mode == 1) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.A, function () {
    if (Mode < 2) {
        Mode += 1
    }
    basic.showNumber(Mode)
})
input.onPinPressed(TouchPin.P2, function () {
    if (Mode == 0) {
        music.playTone(196, music.beat(BeatFraction.Half))
    } else if (Mode == 1) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else {
        music.playTone(784, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.B, function () {
    if (Mode > 0) {
        Mode += -1
    }
    basic.showNumber(Mode)
})
input.onPinPressed(TouchPin.P1, function () {
    if (Mode == 0) {
        music.playTone(165, music.beat(BeatFraction.Half))
    } else if (Mode == 1) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else {
        music.playTone(659, music.beat(BeatFraction.Half))
    }
})
let Mode = 0
basic.showIcon(IconNames.Heart)
Mode = 1
basic.showNumber(Mode)

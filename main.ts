input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.QuarterNote)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EigthNote)
})
music.playMelody("C5 A B G A F G E ", 120)

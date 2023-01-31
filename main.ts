input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    P1 += 1
    OLED.newLine()
    Rounds += 1
    updateScoreeboard()
})
function updateScoreeboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 Score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 Score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
}
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    OLED.newLine()
    Rounds += 1
    updateScoreeboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . . #
        . # # # #
        . # . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
    P2 += 1
    OLED.newLine()
    Rounds += 1
    updateScoreeboard()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Shall we play a game")
    basic.pause(2000)
    updateScoreeboard()
}
let Ties = 0
let P2 = 0
let Rounds = 0
let P1 = 0
Reset()

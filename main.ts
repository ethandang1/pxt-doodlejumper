namespace SpriteKind {
    export const object = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    for (let index = 0; index < 4; index++) {
        jared.vy += -100
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false)
})
let jared: Sprite = null
scene.setTileMap(img`
f 1 f f f 1 f f f 1 f f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f f f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f 5 f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f 5 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f 5 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f 5 f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f 5 f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f 5 f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f 5 f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f 5 f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f 5 f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
f 1 f f f 1 f 5 f f 1 f f f 1 f 
f 1 f f f 1 f f f f 1 f f f 1 f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
scene.setTile(2, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
scene.setTile(1, img`
. . . . . 1 1 . . 1 1 . . . . . 
. . . . . d d . . d d . . . . . 
. . . . . d d b 1 d d . . . . . 
. . . . . d d b 1 d d . . . . . 
. . . . . . d b 1 d . . . . . . 
. . . . . . . b 1 . . . . . . . 
. . . . . . . d 1 . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . . . . b d . . . . . . . 
. . . . . . . b 1 . . . . . . . 
. . . . . . . b 1 . . . . . . . 
. . . . . . . b 1 . . . . . . . 
. . . . . . d b 1 d . . . . . . 
. . . . . d d b 1 d d . . . . . 
. . . . . d d . . d d . . . . . 
. . . . . b d . . b b . . . . . 
`, false)
scene.setTile(5, img`
d d d d d d d d d d d d d d d d 
d f f f f f f f f f f f f f f d 
d d d d d d d d d d d d d d d d 
. d . . . . . . . . . . . . d . 
. d . . . . . . . . . . . . d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
jared = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 5 . . . . . . . 
. . . . . . 7 2 . . . . . . . . 
. . . . . . 7 . . . 7 7 2 . . . 
. 5 4 . 7 7 7 7 7 7 7 . 4 . . . 
. . 2 . 7 7 7 7 7 7 7 . 5 . . . 
. . 7 7 7 7 f 7 f 7 7 . . . . . 
. . . 7 7 f 5 f 5 f 7 7 . 4 5 . 
. . . 7 7 7 f 7 f 7 7 7 7 2 . . 
. . . 7 7 2 7 7 7 2 7 7 . . . . 
. 7 7 7 7 7 2 2 2 7 7 7 7 . 5 . 
. 7 . . 7 7 7 7 7 7 7 . 7 2 4 . 
. 2 4 . . . 7 . . . 7 . . . . . 
. . 5 . . . 2 . . . 7 2 . . . . 
. . . . . 5 4 . . . . 4 5 . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
jared.setPosition(126, 430)
jared.ay = 200
let trampo = sprites.create(img`
d d d d d d d d d d d d d d d d 
d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d 
d d d d d d d d d d d d d d d d 
. d . . . . . . . . . . . . d . 
. d . . . . . . . . . . . . d . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.object)
animation.runImageAnimation(
jared,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . . 6 9 . . . . . . . 
. . . . . . 7 8 . . . . . . . . 
. . . . . . 7 . . . 7 7 8 . . . 
. 9 6 . 7 7 7 7 7 7 7 . 6 . . . 
. . 8 . 7 7 7 7 7 7 7 . 9 . . . 
. . 7 7 7 7 f 7 f 7 7 . . . . . 
. . . 7 7 f 9 f 9 f 7 7 . 6 9 . 
. . . 7 7 7 f 7 f 7 7 7 7 8 . . 
. . . 7 7 8 7 7 7 8 7 7 . . . . 
. 7 7 7 7 7 8 8 8 7 7 7 7 . 9 . 
. 7 . . 7 7 7 7 7 7 7 . 7 8 6 . 
. 8 6 . . . 7 . . . 7 . . . . . 
. . 9 . . . 8 . . . 7 8 . . . . 
. . . . . 9 6 . . . . 6 9 . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . 4 5 . . . . . . . 
. . . . . . 7 2 . . . . . . . . 
. . . . . . 7 . . . 7 7 2 . . . 
. 5 4 . 7 7 7 7 7 7 7 . 4 . . . 
. . 2 . 7 7 7 7 7 7 7 . 5 . . . 
. . 7 7 7 7 f 7 f 7 7 . . . . . 
. . . 7 7 f 5 f 5 f 7 7 . 4 5 . 
. . . 7 7 7 f 7 f 7 7 7 7 2 . . 
. . . 7 7 2 7 7 7 2 7 7 . . . . 
. 7 7 7 7 7 2 2 2 7 7 7 7 . 5 . 
. 7 . . 7 7 7 7 7 7 7 . 7 2 4 . 
. 2 4 . . . 7 . . . 7 . . . . . 
. . 5 . . . 2 . . . 7 2 . . . . 
. . . . . 5 4 . . . . 4 5 . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . c b . . . . . . . 
. . . . . . 7 a . . . . . . . . 
. . . . . . 7 . . . 7 7 a . . . 
. b c . 7 7 7 7 7 7 7 . c . . . 
. . a . 7 7 7 7 7 7 7 . b . . . 
. . 7 7 7 7 f 7 f 7 7 . . . . . 
. . . 7 7 f b f b f 7 7 . c b . 
. . . 7 7 7 f 7 f 7 7 7 7 a . . 
. . . 7 7 a 7 7 7 a 7 7 . . . . 
. 7 7 7 7 7 a a a 7 7 7 7 . b . 
. 7 . . 7 7 7 7 7 7 7 . 7 a c . 
. a c . . . 7 . . . 7 . . . . . 
. . b . . . a . . . 7 a . . . . 
. . . . . b c . . . . c b . . . 
. . . . . . . . . . . . . . . . 
`],
500,
true
)
scene.cameraFollowSprite(jared)
for (let value of scene.getTilesByType(5)) {
    scene.place(value, trampo)
}
controller.moveSprite(jared, 100, 0)

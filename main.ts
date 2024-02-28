function Spawn_Cars () {
	
}
let Player1 = sprites.create(assets.image`Player`, SpriteKind.Player)
let Car1 = assets.image`Red Car`
let Car2 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 6 6 . . 
    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
    . 6 6 6 6 6 8 b b b b 8 b b b 8 
    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
    . 8 8 8 8 f f f 8 8 8 8 f f f f 
    . . . 8 f f f f f 8 8 f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `
let Car3 = assets.image`Red Car2`
let Cars = [Car1, Car2, Car3]
let mySprite = 0
let Car_Spawns = tiles.getTilesByType(sprites.vehicle.roadHorizontal)
Player1.setPosition(74, 109)
tiles.setCurrentTilemap(tilemap`level1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`Background`)
scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer0)
controller.moveSprite(Player1)
Player1.setStayInScreen(true)
scene.cameraFollowSprite(Player1)

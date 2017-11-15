function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    /*int t = 0;
    while (t > 0 && t <= 30) {
      ennemy1.accelerate(moveDistance);
      t += delta;
    }
    while (t > 30 && t <= 60) {
      ennemy1.decelerate(moveDistance);
      t += delta;
    }*/

    if (ennemy1.graphic.position.x < player1.graphic.position.x) {
      ennemy1.accelerate(moveDistance);
    }
    else {
      ennemy1.decelerate(moveDistance);
    }

    ennemy1.move();
    player1.move();
    controls.update();
}

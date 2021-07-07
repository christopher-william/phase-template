export const shipMovement = (cursors, ship) => {
  if (cursors.down.isDown && cursors.right.isDown) {
    console.log("down and right");
    ship.setVelocityX(100);
    ship.setVelocityY(100);
    ship.angle = 135;
    ship.anims.play("fast", true);
  } else if (cursors.down.isDown && cursors.left.isDown) {
    console.log("down  and left");
    ship.setVelocityX(-100);
    ship.setVelocityY(100);
    ship.angle = -135;
    ship.anims.play("fast", true);
  } else if (cursors.up.isDown && cursors.right.isDown) {
    console.log("up and right");
    ship.setVelocityX(100);
    ship.setVelocityY(-100);
    ship.angle = 45;
    ship.anims.play("fast", true);
  } else if (cursors.up.isDown && cursors.left.isDown) {
    console.log("up and left");
    ship.setVelocityX(-100);
    ship.setVelocityY(-100);
    ship.angle = -45;
    ship.anims.play("fast", true);
  } else if (cursors.right.isDown) {
    ship.setVelocityX(100);
    ship.angle = 90;
    console.log("right");
    ship.anims.play("fast", true);
  } else if (cursors.left.isDown) {
    ship.setVelocityX(-100);
    ship.anims.play("fast", true);
    ship.angle = -90;

    console.log("left");
  } else if (cursors.up.isDown) {
    ship.setVelocityY(-100);
    ship.anims.play("fast", true);
    ship.angle = 0;
    console.log("up");
  } else if (cursors.down.isDown) {
    ship.setVelocityY(100);
    ship.anims.play("fast", true);
    ship.angle = 180;
    console.log("down");
  } else {
    ship.anims.play("stop", true);
    ship.setVelocityX(0);
    ship.setVelocityY(0);
    console.log("stop");
  }
};

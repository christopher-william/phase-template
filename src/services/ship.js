const movement = {
  up: (ship) => {
    console.log("up");

    ship.setVelocityX(0);
    ship.setVelocityY(-100);

    ship.angle = 0;
    ship.anims.play("movement", true);
  },

  down: (ship) => {
    console.log("down");

    ship.setVelocityX(0);
    ship.setVelocityY(100);

    ship.angle = 180;
    ship.anims.play("movement", true);
  },

  right: (ship) => {
    console.log("right");

    ship.setVelocityX(100);
    ship.setVelocityY(0);

    ship.angle = 90;
    ship.anims.play("movement", true);
  },

  left: (ship) => {
    console.log("left");

    ship.setVelocityX(-100);
    ship.setVelocityY(0);

    ship.angle = -90;
    ship.anims.play("movement", true);
  },

  space: (ship) => {
    console.log("stop");

    ship.setVelocityX(0);
    ship.setVelocityY(0);

    ship.anims.play("stop", true);
  },
};

export const handlerKeyPressed = (cursors, ship) => {
  try {
    for (const [key, value] of Object.entries(cursors)) {
      if (value.isDown) {
        movement[key](ship);
        break;
      }
      movement["space"](ship);
    }
  } catch (error) {
    console.error(error);
  }
};

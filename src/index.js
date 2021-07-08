import Phaser from "phaser";
import spaceBackground from "@/assets/space-background.png";
import shipSprite from "@/assets/ship-sprite.png";

import { handlerKeyPressed } from "@/services/ship";

class MyGame extends Phaser.Scene {
  constructor(...args) {
    super(...args);
    console.log("Phaser Start");

    this.ship = null;
    this.cursors = null;
  }

  preload() {
    this.load.image("space-background", spaceBackground, {
      width: 1300,
      height: 800,
    });
    this.load.spritesheet("ship", shipSprite, {
      frameWidth: 64,
      frameHeight: 61,
    });
  }

  create() {
    this.add.image(400, 150, "space-background");

    this.ship = this.physics.add.sprite(300, 300, "ship");
    this.anims.create({
      key: "stop",
      frames: [{ key: "ship", frame: 1 }],
      frameRate: 8,
    });

    this.anims.create({
      key: "movement",
      frames: [{ key: "ship", frame: 0 }],
      frameRate: 8,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    handlerKeyPressed(this.cursors, this.ship);
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1300,
  height: 800,
  scene: MyGame,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

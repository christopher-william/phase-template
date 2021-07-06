import Phaser from "phaser";
import spaceBackground from "@/assets/space-background.png";
import shipSprite from '@/assets/ship-sprite.png';

class MyGame extends Phaser.Scene {
  constructor(...args) {
    super(...args);
    console.log("Phaser Start");

    this.ship = null
    this.cursors = null
  }



  preload() {
    this.load.image("space-background", spaceBackground, { width:1300 ,height: 800 });
    this.load.spritesheet('ship', shipSprite, { frameWidth: 60, frameHeight: 60 })
  }

  create() {
    this.add.image(400, 150, "space-background");

    this.ship = this.physics.add.sprite(300, 300, 'ship')

    this.anims.create({
      key: 'stop',
      frames:  [ { key: 'ship', frame: 1 } ],
      frameRate: 8,
    });

    this.anims.create({
      key: 'right',
      frames: [ { key: 'ship', frame: 6 } ],
      frameRate: 8,
    });

    this.anims.create({
      key: 'left',
      frames: [ { key: 'ship', frame: 16 } ],
      frameRate: 8,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {

    if (this.cursors.right.isDown)  {
      console.log('right')
        this.ship.setVelocityX(100);

        this.ship.anims.play('right', true);
    } else if (this.cursors.left.isDown){
      console.log('left')
      this.ship.setVelocityX(-100);
      this.ship.anims.play('left', true);
    } else {
      this.ship.setVelocityX(0);
      this.ship.anims.play('stop', true);

    }


  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1300,
  height: 800,
  scene: MyGame,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 },
        debug: false
    }
},
};

const game = new Phaser.Game(config);

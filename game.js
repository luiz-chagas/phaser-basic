var WIDTH = 800;
var HEIGHT = 600;
var game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'myGame', { preload: preload, create: create, update: update });

function preload() {
    //Load your sprites
}

function create() {
    //Make it responsive!
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    //Set a maximum size so it doesn't look awful on big screens
    this.scale.maxWidth = WIDTH;
    this.scale.maxHeight = HEIGHT;
    this.scale.refresh();
    //Create game elements
    text = game.add.text(game.world.centerX, game.world.centerY, "Hello World from Phaser!", {fill: 'white'});
    text.anchor.set(0.5);
}

function update() {
    //Update game world
}

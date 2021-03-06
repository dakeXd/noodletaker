let config = {
    type: Phaser.AUTO,
    width: 1376,
    height: 736,
    backgroundColor: '#303fb1',
    style: {
        fontFamily: 'japaneseFont'
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 400},
            debug: false
        }
    },

    scene: [TitleScene, ChatScene, MatchmakingScene, ControlKeysScene, TutorialScene, GameScene, BadEndingScene, P1WinnerScene, P2WinnerScene, DisconnectionScene, ConnectionLostScene]

};

let game = new Phaser.Game(config);

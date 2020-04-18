import { ArcadeMachine } from './ArcadeMachine';

describe('ArcadeMachine', () => {
  let sut = new ArcadeMachine();

  beforeEach(() => {
    sut = new ArcadeMachine();
  });

  it('should have an initial state of booting.', () => {
    expect(sut.hud).toBe('Booting');
  });

  it('should complete booting after waiting for time to pass', () => {
    // Act
    sut.timePass();

    // Assert
    expect(sut.hud).toBe('Drop a coin to play');
  });

  it(`should be 'ready to play' after boot compelete and a coin has been dropped`, () => {
    // Act
    sut.timePass();
    sut.dropCoin();

    // Assert
    expect(sut.hud).toBe('Ready to play!');
  });

  it('should play a game after booting, dropping a coin, then pressing play', () => {
    // Act
    sut.timePass();
    sut.dropCoin();
    expect(sut.credit).toBe(1);
    sut.pressOnePlayer();

    // Assert
    expect(sut.hud).toBe('Stoot em!');
  });

  it('should end the game after some time of playing', () => {
    // Act
    sut.timePass();
    sut.dropCoin();
    sut.pressOnePlayer();
    sut.timePass();

    // Assert
    expect(sut.hud).toBe('Game Over');
  });

  it(`should wan't a coin to be dropped after a single coin game has finised and time has passed`, () => {
    // Act
    sut.timePass();
    sut.dropCoin();
    sut.pressOnePlayer();
    sut.timePass();
    sut.timePass();

    // Assert
    expect(sut.hud).toBe('Drop a coin to play');
  });

  it('should, given two coins dropped, allow two single player games to be played in a row', () => {
    // Act
    sut.timePass();
    sut.dropCoin();
    sut.dropCoin();
    sut.pressOnePlayer();
    sut.timePass();
    sut.timePass();

    // Assert Game 1 over
    expect(sut.hud).toBe('Ready to play!');

    // 2nd Act
    sut.pressOnePlayer();
    sut.timePass();
    sut.timePass();

    // Assert Game 1 over
    expect(sut.hud).toBe('Drop a coin to play');
  });
});

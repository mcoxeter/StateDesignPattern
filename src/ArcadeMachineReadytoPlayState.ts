import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachine } from './ArcadeMachine';
import { ArcadeMachinePlayingState } from './ArcadeMachinePlayingState';

export class ArcadeMachineReadytoPlayState implements ArcadeMachineBaseState {
  public enterState(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.hud = 'Ready to play!';
  }
  public pressOnePlayer(arcadeMachine: ArcadeMachine): void {
    if (arcadeMachine.credit > 0) {
      arcadeMachine.transitionToState(new ArcadeMachinePlayingState(1));
    }
  }
  public pressTwoPlayer(arcadeMachine: ArcadeMachine): void {
    if (arcadeMachine.credit > 1) {
      arcadeMachine.transitionToState(new ArcadeMachinePlayingState(2));
    }
  }
  public dropCoin(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.credit++;
  }
  public timePass(arcadeMachine: ArcadeMachine): void {}
}

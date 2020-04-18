import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachine } from './ArcadeMachine';
import { ArcadeMachineReadytoPlayState } from './ArcadeMachineReadytoPlayState';

export class ArcadeMachineOutOfCreditState implements ArcadeMachineBaseState {
  public enterState(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.hud = 'Drop a coin to play';
  }
  public pressOnePlayer(arcadeMachine: ArcadeMachine): void {}
  public pressTwoPlayer(arcadeMachine: ArcadeMachine): void {}
  public dropCoin(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.credit++;
    arcadeMachine.transitionToState(new ArcadeMachineReadytoPlayState());
  }
  public timePass(arcadeMachine: ArcadeMachine): void {}
}

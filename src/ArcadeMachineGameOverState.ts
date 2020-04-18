import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachine } from './ArcadeMachine';
import { ArcadeMachineReadytoPlayState } from './ArcadeMachineReadytoPlayState';
import { ArcadeMachineOutOfCreditState } from './ArcadeMachineOutOfCreditState';

export class ArcadeMachineGameOverState implements ArcadeMachineBaseState {
  public enterState(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.hud = 'Game Over';
  }
  public pressOnePlayer(arcadeMachine: ArcadeMachine): void {}
  public pressTwoPlayer(arcadeMachine: ArcadeMachine): void {}
  public dropCoin(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.credit++;
  }
  public timePass(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.transitionToState(
      arcadeMachine.credit > 0
        ? new ArcadeMachineReadytoPlayState()
        : new ArcadeMachineOutOfCreditState()
    );
  }
}

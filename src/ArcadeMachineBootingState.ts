import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachine } from './ArcadeMachine';
import { ArcadeMachineOutOfCreditState } from './ArcadeMachineOutOfCreditState';

export class ArcadeMachineBootingState implements ArcadeMachineBaseState {
  public enterState(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.bootime = Date.now();
    arcadeMachine.hud = 'Booting';
  }
  public pressOnePlayer(arcadeMachine: ArcadeMachine): void {}
  public pressTwoPlayer(arcadeMachine: ArcadeMachine): void {}
  public dropCoin(arcadeMachine: ArcadeMachine): void {}
  public timePass(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.transitionToState(new ArcadeMachineOutOfCreditState());
  }
}

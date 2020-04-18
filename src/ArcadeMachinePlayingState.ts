import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachine } from './ArcadeMachine';
import { ArcadeMachineGameOverState } from './ArcadeMachineGameOverState';

export class ArcadeMachinePlayingState implements ArcadeMachineBaseState {
  public constructor(private numberOfPlayers: number) {}
  public enterState(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.hud = 'Stoot em!';
    arcadeMachine.credit -= this.numberOfPlayers;
  }
  public pressOnePlayer(arcadeMachine: ArcadeMachine): void {}
  public pressTwoPlayer(arcadeMachine: ArcadeMachine): void {}
  public dropCoin(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.credit++;
  }
  public timePass(arcadeMachine: ArcadeMachine): void {
    arcadeMachine.transitionToState(new ArcadeMachineGameOverState());
  }
}

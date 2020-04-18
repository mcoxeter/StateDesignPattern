import { ArcadeMachineBaseState } from './ArcadeMachineBaseState';
import { ArcadeMachineBootingState } from './ArcadeMachineBootingState';

/* This is the context within the design pattern */
export class ArcadeMachine {
  public hud: string;
  public bootime: number;
  public credit: number = 0;
  private currentState: ArcadeMachineBaseState;

  public constructor() {
    this.transitionToState(new ArcadeMachineBootingState());
  }
  public transitionToState(newState: ArcadeMachineBaseState) {
    this.currentState = newState;
    this.currentState.enterState(this);
  }
  public pressOnePlayer(): void {
    this.currentState.pressOnePlayer(this);
  }
  public pressTwoPlayer(): void {
    this.currentState.pressTwoPlayer(this);
  }
  public dropCoin(): void {
    this.currentState.dropCoin(this);
  }
  public timePass(): void {
    this.currentState.timePass(this);
  }
}

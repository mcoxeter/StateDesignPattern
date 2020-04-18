import { ArcadeMachine } from './ArcadeMachine';

export interface ArcadeMachineBaseState {
  enterState(arcadeMachine: ArcadeMachine): void;
  pressOnePlayer(arcadeMachine: ArcadeMachine): void;
  pressTwoPlayer(arcadeMachine: ArcadeMachine): void;
  dropCoin(arcadeMachine: ArcadeMachine): void;
  timePass(arcadeMachine: ArcadeMachine): void;
}

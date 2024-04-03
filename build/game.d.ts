import { Action, State, Hand, Rule } from '../types';
export default class Game {
    private state;
    constructor(initialState: State, rules?: Rule);
    enforceRules(handInfo: Hand): Hand;
    getState(): State;
    setState(state: State): void;
    dispatch(action: Action): State;
    getActivePlayer(): {
        activePlayerId: number;
        activeHandId: number;
    };
    _dispatch(action: Action): State;
    private _drawCard;
    private _getStageFromInsuranceStage;
    private _getStageFromPlayerTurn;
}

import { Action, Card, SideBetsFromUser } from '../types';
export declare const invalid: (action: Action, info: any) => Action;
export declare const restore: () => Action;
export declare const bet: ({ bet, playerId, sideBets }: {
    bet: number;
    playerId: number;
    sideBets?: SideBetsFromUser | undefined;
}) => Action;
export declare const dealCards: () => Action;
export declare const insurance: ({ bet, playerId }: {
    bet: number;
    playerId: number;
}) => Action;
export declare const split: () => Action;
export declare const hit: () => Action;
export declare const double: () => Action;
export declare const stand: () => Action;
export declare const surrender: () => Action;
export declare const showdown: () => Action;
export declare const dealerHit: (dealerHoleCard?: Card | undefined) => Action;

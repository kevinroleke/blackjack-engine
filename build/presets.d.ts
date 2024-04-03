import { SideBets, Rule, State, Player } from '../types';
export declare const getDefaultSideBets: (active?: boolean) => SideBets;
export declare const getDefaultRules: () => Rule;
export declare const defaultPlayer: (name?: string) => Player;
export declare const defaultState: (rules: Rule) => State;

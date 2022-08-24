import { AbilityScores } from "./ability-scores";

export interface Npc {
	race: string,
	class: string,
	gender: string,
	abilityScores: AbilityScores,
	loaded: boolean
}
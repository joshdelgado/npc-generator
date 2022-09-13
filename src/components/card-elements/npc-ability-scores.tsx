import React from "react";
import { NpcAbilityScore } from "./npc-ability-score";

export function NpcAbilityScores(props: any) {
	return (
		<ul className="npc-card__ability-scores" >
			<NpcAbilityScore label="Strength" score={props.npc.abilityScores.strength}></NpcAbilityScore>
			<NpcAbilityScore label="Dexterity" score={props.npc.abilityScores.dexterity}></NpcAbilityScore>
			<NpcAbilityScore label="Constitution" score={props.npc.abilityScores.constitution}></NpcAbilityScore>
			<NpcAbilityScore label="Intelligence" score={props.npc.abilityScores.intelligence}></NpcAbilityScore>
			<NpcAbilityScore label="Wisdom" score={props.npc.abilityScores.wisdom}></NpcAbilityScore>
			<NpcAbilityScore label="Charisma" score={props.npc.abilityScores.charisma}></NpcAbilityScore>
		</ul>
	);
}
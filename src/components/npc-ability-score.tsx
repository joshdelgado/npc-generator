import React from "react";

export function NpcAbilityScore(props: any) {
	return (
		<li className="npc-card__ability-score">
			<div className='npc-stat'>
				<span className="npc-stat__label">{props.label}</span>
				<span className="npc-stat__score">{props.score.score}</span>
				<span className="npc-stat__modifier">{props.score.modifier > 0 ? '+' + props.score.modifier : props.score.modifier}</span>
			</div>
		</li>
	);
}
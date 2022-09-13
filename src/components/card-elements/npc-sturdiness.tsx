import React from "react";

export function NpcSturdiness(props: any) {
	return (
		<ol className="npc-card__sturdiness">
			<li><span>Level</span>{props.npc.level.level}</li>
			<li><span>HP</span>{props.npc.hitpoints}</li>
			<li><span>AC</span>{props.npc.armorClass}</li>
		</ol>
	);
}
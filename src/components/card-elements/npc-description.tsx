import React from "react";

export function NpcDescription(props: any) {
	return (
		<div className="npc-card__description">
			{props.npc.description}
		</div>
	);
}
import React from "react";

export function NpcImage(props: any) {
	return (
		<div className="npc-card__image" >
			<img src={`${process.env.PUBLIC_URL}/img/${props.npc.race.index}.png`} alt={props.npc.race.name} />
		</div>
	);
}
import React from "react";
import { NpcGenderIcon } from "./gender-icon";

export function NpcName(props: any) {

	return (
		<div className="npc-card__titles">
			<h3 className="npc-card__name">{props.npc.fullName}</h3>
			<NpcGenderIcon gender={props.npc.attributes.gender}></NpcGenderIcon>
			<ol className="npc-card__info">
				<li className="npc-card__value">{props.npc.race.name}</li>
				<li className="npc-card__value">{props.npc.class.name}</li>
			</ol>
		</div>
	);
}
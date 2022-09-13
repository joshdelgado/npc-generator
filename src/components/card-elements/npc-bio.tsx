import React from "react";
import { NpcAttributes } from "./npc-attributes";
import { NpcDescription } from "./npc-description";

export function NpcBio(props: any) {
	return (
		<div className="npc-card__bio">
			<NpcAttributes npc={props.npc}></NpcAttributes>
			<NpcDescription npc={props.npc}></NpcDescription>
		</div>
	);
}
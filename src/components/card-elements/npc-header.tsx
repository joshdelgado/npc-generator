import React from "react";
import { NpcName } from "./npc-name";
import { NpcSturdiness } from "./npc-sturdiness";

export function NpcHeader(props: any) {
	return (
		<div className="npc-card__header">
			<NpcName npc={props.npc}></NpcName>
			<NpcSturdiness npc={props.npc}></NpcSturdiness>
		</div>
	);
}
import React from "react";
import { elvenTranslations } from "../consts/races";
import { NpcGenderIcon } from "./gender-icon";

export function NpcName(props: any) {
	let classes = 'npc-card__name',
		title: string | undefined = undefined;

	if (elvenTranslations.has(props.npc.surname)) {
		classes += ' npc-card__name--has-tooltip';
		title = 'Common translation: ' + props.npc.firstName + ' ' + elvenTranslations.get(props.npc.surname);
	}

	if (!!props.npc.virtueName) {
		classes += ' npc-card__name--has-tooltip';
		title = 'Virtue name: ' + props.npc.virtueName;
	}

	return (<>
		<h3 className={classes} title={title}>{props.npc.fullName}</h3>
		<NpcGenderIcon gender={props.npc.attributes.gender}></NpcGenderIcon>
	</>);
}
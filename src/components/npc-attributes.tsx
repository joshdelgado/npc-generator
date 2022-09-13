import React from 'react';
import { elvenTranslations } from '../consts/races';
import { capitalize } from '../utility/functions';

export function NpcAttributes(props: any) {

	return (
		<ol className="npc-card__attributes">
			<li><strong>Age</strong>{props.npc.attributes.age} years</li>
			<li><strong>Height</strong>{props.npc.attributes.height}</li>
			<li><strong>Weight</strong>{props.npc.attributes.weight} lbs</li>
			<li><strong>Alignment</strong>{props.npc.attributes.alignment.name}</li>
			{props.npc.virtueName ? <li><strong>Virtue name</strong>{props.npc.virtueName}</li> : null}
			{elvenTranslations.has(props.npc.surname) ? <li><strong>Name Translation</strong>{elvenTranslations.get(props.npc.surname)}</li> : null}
			{props.npc.nickname ? <li><strong>Nickname</strong>{props.npc.nickname}</li> : null}
			{props.npc.attributes.scaleColor ? <li><strong>Scale Color</strong>{capitalize(props.npc.attributes.scaleColor)}</li> : null}
		</ol>
	)
}
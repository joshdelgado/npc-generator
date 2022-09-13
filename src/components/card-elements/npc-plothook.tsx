import React from "react";

export function NpcPlothook(props: any) {
	return (
		<div className="npc-card__plothook">
			<h4 className="npc-card__plothook-title">Plothook</h4>
			<p className="npc-card__plothook-text">"{props.npc.plotHook}" <strong>-&nbsp;{props.npc.fullName}</strong></p>
		</div>
	)
}
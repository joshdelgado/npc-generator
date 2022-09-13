export const classes: Map<string, any> = new Map<string, any>([
	['barbarian', { statPriority: ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence'] }],
	['bard', { statPriority: ['charisma', 'dexterity', 'constitution', 'strength', 'wisdom', 'intelligence'] }],
	['cleric', { statPriority: ['wisdom', 'strength', 'dexterity', 'constitution', 'intelligence', 'charisma'] }],
	['druid', { statPriority: ['wisdom', 'constitution', 'dexterity', 'intelligence', 'charisma', 'strength'] }],
	['fighter', { statPriority: ['strength', 'dexterity', 'constitution', 'intelligence', 'charisma', 'wisdom'] }],
	['monk', { statPriority: ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'] }],
	['paladin', { statPriority: ['strength', 'constitution', 'charisma', 'dexterity', 'wisdom', 'intelligence'] }],
	['ranger', { statPriority: ['dexterity', 'constitution', 'wisdom', 'intelligence', 'strength', 'charisma'] }],
	['rogue', { statPriority: ['dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma', 'strength'] }],
	['sorcerer', { statPriority: ['charisma', 'dexterity', 'constitution', 'wisdom', 'intelligence', 'strength'] }],
	['warlock', { statPriority: ['charisma', 'constitution', 'dexterity', 'wisdom', 'strength', 'intelligence'] }],
	['wizard', { statPriority: ['intelligence', 'dexterity', 'constitution', 'wisdom', 'charisma', 'strength'] }]
]);
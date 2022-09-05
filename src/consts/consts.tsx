export const abilities: string[] = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

// Taken from class summaries here https://www.dndbeyond.com/sources/basic-rules/classes
export const classes: Map<string, any> = new Map<string, any>([
	['barbarian', { statPriority: ['strength', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'charisma'] }],
	['bard', { statPriority: ['charisma', 'dexterity'] }],
	['cleric', { statPriority: ['wisdom', 'charisma'] }],
	['druid', { statPriority: ['wisdom', 'intelligence'] }],
	['fighter', { statPriority: ['strength', 'dexterity', 'constitution'] }],
	['monk', { statPriority: ['dexterity', 'wisdom'] }],
	['paladin', { statPriority: ['strength', 'charisma'] }],
	['ranger', { statPriority: ['dexterity', 'wisdom'] }],
	['rogue', { statPriority: ['dexterity', 'intelligence'] }],
	['sorcerer', { statPriority: ['charisma', 'constitution'] }],
	['warlock', { statPriority: ['charisma', 'dexterity'] }],
	['wizard', { statPriority: ['intelligence', 'wisdom'] }]
]);
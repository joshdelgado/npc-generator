import { Alignment } from "../interfaces/alignment";

export const alignments: Map<string, Alignment> = new Map<string, Alignment>([
	['chaotic-evil', { alias: 'chaotic-evil', code: 'CE', name: 'Chaotic Evil' }],
	['chaotic-neutral', { alias: 'chaotic-neutral', code: 'CN', name: 'Chaotic Neutral' }],
	['chaotic-good', { alias: 'chaotic-good', code: 'CG', name: 'Chaotic Good' }],
	['lawful-evil', { alias: 'lawful-evil', code: 'LE', name: 'Lawful Evil' }],
	['lawful-neutral', { alias: 'lawful-neutral', code: 'LN', name: 'Lawful Neutral' }],
	['lawful-good', { alias: 'lawful-good', code: 'LG', name: 'Lawful Good' }],
	['neutral-evil', { alias: 'neutral-evil', code: 'NE', name: 'Neutral Evil' }],
	['neutral', { alias: 'neutral', code: 'N', name: 'Neutral' }],
	['neutral-good', { alias: 'neutral-good', code: 'NG', name: 'Neutral Good' }],
]);
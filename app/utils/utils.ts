export const getEngLetters = (str: string) => {
	const accents = 'ÁÉÍÓÚáéíóúâñêîôûàèìòùÇçēå';
	const accentLetters = accents.split('');
	const strLetters = str.split('');
	const findMatch = strLetters.some((r) => accentLetters.includes(r));
	if (findMatch) {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	} else return str;
};

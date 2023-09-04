import { Typoist, ITypoistSettings } from "typoist";

export function typeIt(selector: string, text: string, options?: ITypoistSettings | {}) {
	const textArea: HTMLTextAreaElement = document.querySelector(selector)!;
	const extraTypoistOptions = options ?? {};

	if (textArea) {
		const typoist = new Typoist({
			...extraTypoistOptions,
			appendFunction: async (character) => {textArea.innerHTML += character},
			deleteFunction: async () => {textArea.innerHTML = textArea.innerHTML.slice(0, -1)},
		});

		typoist.type(text);
	}
};


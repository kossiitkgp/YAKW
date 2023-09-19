import { Typoist, ITypoistSettings } from "typoist";

export function typeIt(selector: string, text: string, options?: ITypoistSettings | {}) {
    const textArea: HTMLTextAreaElement = document.querySelector(selector)!;
    const extraTypoistOptions = options ?? {};

    if (textArea) {
        const typoist = new Typoist({
            ...extraTypoistOptions,
            appendFunction: async (character) => {
                textArea.innerHTML += character;
            },
            deleteFunction: async () => {
                textArea.innerHTML = textArea.innerHTML.slice(0, -1);
            },
        });

        typoist.type(text);
    }
}

export function hackerTextEffect(target: Element, duration: number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`~!@#$%^&*(){}:\"|<>?,./;'[]\\=-0987654321";
    let reqId, start;
    let isRunning = true;

    const step = (timestamp) => {
        if (start === undefined) start = timestamp;
        const progress = timestamp - start;
        target.innerText = target.innerText
            .split("")
            .map((letter) => (/^\s*$/.test(letter) ? letter : chars[Math.floor(Math.random() * chars.length)]))
            .join("");

        if (progress > duration || !isRunning) {
            window.cancelAnimationFrame(reqId);
        } else {
            reqId = window.requestAnimationFrame(step);
        }
    };


    reqId = window.requestAnimationFrame(step);
    const cancelAnimation = () => { isRunning = false; };
    return cancelAnimation;
}

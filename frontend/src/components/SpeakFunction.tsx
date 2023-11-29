export const speak = ( text: string ) => {
    const utterance = new SpeechSynthesisUtterance(text);
    (window.speechSynthesis as any).speak(utterance);
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prompt_1 = require("../config/Prompt");
describe('generateStoryPrompt', () => {
    it('should generate a prompt with the given theme', () => {
        const theme = 'dragão amigável';
        const max_tokens = 200;
        const expectedPrompt = `Por favor, crie uma história curta para crianças com o tema ${theme} e que tenha no máximo ${max_tokens} tokens. A história deve ter uma finalização seguindo o padrão dos ${max_tokens} tokens, preste atenção para não deixar a história em aberto, finalize-a dentro do padrão de ${max_tokens} tokens.`;
        const prompt = (0, Prompt_1.generateStoryPrompt)(theme, max_tokens);
        expect(prompt).toEqual(expectedPrompt);
    });
});

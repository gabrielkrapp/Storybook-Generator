"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStoryPrompt = void 0;
const generateStoryPrompt = (theme, max_tokens) => {
    return `Por favor, crie uma história curta para crianças com o tema ${theme} e que tenha no máximo ${max_tokens} tokens. A história deve ter uma finalização seguindo o padrão dos ${max_tokens} tokens, preste atenção para não deixar a história em aberto, finalize-a dentro do padrão de ${max_tokens} tokens.`;
};
exports.generateStoryPrompt = generateStoryPrompt;

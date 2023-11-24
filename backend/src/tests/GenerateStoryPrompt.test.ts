import { generateStoryPrompt } from "../config/Prompt";

describe('generateStoryPrompt', () => {
  it('should generate a prompt with the given theme', () => {
    const theme = 'dragão amigável';
    const expectedPrompt = `Por favor, crie uma história curta sobre ${theme}.`;
    const prompt = generateStoryPrompt(theme);
    expect(prompt).toEqual(expectedPrompt);
  });
});

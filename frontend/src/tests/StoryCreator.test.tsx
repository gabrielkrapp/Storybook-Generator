import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import StoryCreator from '../components/StoryCreator';
import { server } from './mocks/handlers';

describe('StoryCreator', () => {
    beforeAll(() => server.listen());
    afterEach(() => {server.resetHandlers()})

    it('creates a story when the button is clicked', async () => {
        render(<StoryCreator />);
        const input = screen.getByPlaceholderText('Digite o tema da história...');
        const button = screen.getByRole('button', { name: /criar história/i });
        
        fireEvent.change(input, { target: { value: 'Aventura' } });
        fireEvent.click(button);
        
        await waitFor(() => {screen.getByText('Uma aventura incrível')});
    });

});

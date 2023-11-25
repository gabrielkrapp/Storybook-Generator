import { render, screen, fireEvent } from '@testing-library/react';
import StoryInput from '../components/StoryInput';

describe('StoryInput', () => {
  it('allows typing in the input', () => {
    const setTheme = jest.fn();
    render(<StoryInput theme="" setTheme={setTheme} />);
    const input = screen.getByPlaceholderText('Digite o tema da história...');
    fireEvent.change(input, { target: { value: 'Aventura' } });
    expect(setTheme).toHaveBeenCalledWith('Aventura');
  });
});

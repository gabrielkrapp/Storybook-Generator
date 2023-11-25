
import { render, screen } from '@testing-library/react';
import CreateButton from '../components/CreateButton';

describe('<CreateButton />', () => {
  test('displays the button with correct text when not loading', () => {
    render(<CreateButton isLoading={false} onClick={() => {}} />);
    screen.getByText('Criar História');
  });

  test('displays a different text and is disabled when isLoading is true', () => {
    render(<CreateButton isLoading={true} onClick={() => {}} />);
    screen.getByText('Criando...');
  });
});

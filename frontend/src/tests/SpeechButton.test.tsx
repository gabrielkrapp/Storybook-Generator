import { render, screen } from '@testing-library/react';
import SpeechButton from '../components/SpeechButton';

describe('<CreateButton />', () => {

  test('renders the speech icon button', () => {
    render(<SpeechButton text="Test speech" />);
    screen.getByTestId('speech-button');
  });
});

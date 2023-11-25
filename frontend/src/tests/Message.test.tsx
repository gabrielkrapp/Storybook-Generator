import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Message', () => {
  it('displays an error message', () => {
    const testMessage = 'An error has occurred';
    render(<Message message={testMessage} isError={true} />);
    screen.getByText(testMessage);
  });

  it('displays a success message', () => {
    const testMessage = 'Operation successful';
    render(<Message message={testMessage} />);
    screen.getByText(testMessage);
  });
});

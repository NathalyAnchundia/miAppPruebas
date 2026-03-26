import { fireEvent, render } from '@testing-library/react-native';
import ButtonSum from '../components/ButtonSum';

test('botón ejecuta suma correctamente', () => {
  const mockFn = jest.fn();

  const { getByText } = render(<ButtonSum onResult={mockFn} />);

  fireEvent.press(getByText('Sumar'));

  expect(mockFn).toHaveBeenCalledWith(5);
});
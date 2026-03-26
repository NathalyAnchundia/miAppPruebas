import { Button } from 'react-native';
import { suma } from '../utils/math';

export default function ButtonSum({ onResult }) {
  return (
    <Button
      title="Sumar"
      onPress={() => onResult(suma(2, 3))}
    />
  );
}
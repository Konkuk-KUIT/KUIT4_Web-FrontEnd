import Header from '../Header';
import PasswordIndicator from '../PasswordIndicator';
import NumberKeypads from '../NumberKeypads';
import { useEffect, useState } from 'react';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';
import shuffle from '../../utils/shuffle';

export default function PasswordInput({
  title,
  subtitle,
  length = DEFAULT_PASSWORD_LENGTH,
  onComplete,
}) {
  const [password, setPassword] = useState('');
  const isPasswordCompleted = password.length === 4;

  useEffect(() => {
    if (isPasswordCompleted) {
        onComplete(password);
    }
  }, [isPasswordCompleted]);

  const keypadNumbers = shuffle(
    Array.from({ length: 10 }, (_, index) => index),
  );

  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);
  };

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={keypadNumbers}
        onPress={handleKeyPress} // 누른 숫자를 반환
      />
    </>
  );
}

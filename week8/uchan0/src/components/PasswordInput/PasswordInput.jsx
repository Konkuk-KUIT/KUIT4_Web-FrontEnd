import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PasswordIndicator from '../PasswordIndicator/PasswordIndicator';
import NumberKeypads from '../NumberKeypads/NumberKeypads';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';
import shuffle from '../../utils/shuffle';
import { useMemo } from 'react';

export default function PasswordInput({
  title,
  subtitle,
  onComplete,
  secure = true,
  length = DEFAULT_PASSWORD_LENGTH,
}) {
  const [password, setPassword] = useState('');
  const isPasswordCompleted = password.length === 4;

  const keypadNumbers = useMemo(
    () => shuffle(Array.from({ length: 10 }, (_, index) => index)),
    [],
  );

  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);
  };

  useEffect(() => {
    if (isPasswordCompleted) {
      onComplete(password);
      setPassword('');
    }
  }, [isPasswordCompleted]);
  return (
    <>
      <Header
        title={title}
        subtitle={<span style={{ color: 'red' }}>{subtitle}</span>}
      />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={keypadNumbers}
        onPress={handleKeyPress}
        secure={secure}
      />
    </>
  );
}

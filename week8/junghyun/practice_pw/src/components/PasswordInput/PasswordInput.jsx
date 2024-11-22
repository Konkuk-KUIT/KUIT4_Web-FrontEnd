import { useEffect, useState, useMemo } from 'react';
import Header from '../Header/Header';
import PasswordIndicator from '../PasswordIndicator/PasswordIndicator';
import NumberKeypads from '../NumberKeypads/NumberKeypads';
import shuffle from '../../utils/shuffle';
import {DEFAULT_PASSWORD_LENGTH} from '../../constants/password';

export function PasswordInput({
  title,
  subtitle,
  length=DEFAULT_PASSWORD_LENGTH,
  onComplete,
  secure=true,
}) {
  
  const [password, setPassword] = useState('');
  const isPasswordCompleted = password.length === length;

  const shuffledNumbers = useMemo(() => 
    shuffle(Array.from({ length: 10 }).map((_, index) => index)),
    [],
  );

  const handleKeypadPress = (number) => {
    setPassword((prev) => prev + number);
  };

  const resetPassword = () => {
    setPassword('');
  };

  useEffect(() => {
    if (isPasswordCompleted) {
      onComplete(password);
      resetPassword();
    }
  }, [isPasswordCompleted]);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={shuffledNumbers}
        onPress={handleKeypadPress}
        secure={true}
      />
    </>
  );
}
export default PasswordInput;
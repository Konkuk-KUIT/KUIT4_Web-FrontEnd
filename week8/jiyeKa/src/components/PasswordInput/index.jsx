import Header from '../Header';
import PasswordIndicator from '../PasswordIndicator';
import NumberKeypads from '../NumberKeypads';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';
import shuffle from '../../utils/shuffle';
import { useEffect, useMemo, useState } from 'react';

export function PasswordInput({title, subtitle, onComplete, length=DEFAULT_PASSWORD_LENGTH}) {
  const [password, setPassword] = useState('');
  const isPasswordCompleted = password.length===4;

  const keypadNumbers = useMemo(() => shuffle(
    Array.from({length:10}, (_, index) => index),
  ), []); 

  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);
  }

  useEffect(() => {
    if(isPasswordCompleted){
      onComplete(password);
      setPassword('');
    }
  }, [isPasswordCompleted]);




  return(
    <>
      <Header title={title} subtitle={subtitle}/>
      <PasswordIndicator length={length} value={password}/>
      <NumberKeypads numbers={keypadNumbers} onPress={handleKeyPress}/>
    </>
  );
}


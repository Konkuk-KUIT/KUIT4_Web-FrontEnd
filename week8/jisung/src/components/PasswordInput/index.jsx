import Header from '../Header';
import PasswordIndicator from '../PasswordIndicator';
import NumberKeypads from '../NumberKeypads';
import { useEffect, useState } from 'react';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';
import shuffle from '../../utils/shuffle';
import { useMemo } from 'react';

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

  const keypadNumbers = useMemo(() => shuffle(
    Array.from({ length: 10 }, (_, index) => index)),
  [] // Dependency 배열을 비워놓으면 리렌더링 되더라도 항상 그대로 유지됨
  );
  
  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);
  };
  // 이 메서드에 의해 비밀번호를 누를 때마다 password의 상태가 변경돼서 PasswordInput 컴포넌트가 리렌더링됨
  // 따라서 keypadNumbers도 비밀번호를 누를 때마다 shuffle되고 리렌더링됨
  // 이걸 방지하려면 useMemo로 keypadNumbers의 shuffle을 감싸야함

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

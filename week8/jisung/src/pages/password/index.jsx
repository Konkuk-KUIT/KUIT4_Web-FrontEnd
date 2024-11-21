import Header from '../../components/Header'
import PasswordIndicator from '../../components/PasswordIndicator'
import NumberKeypads from '../../components/NumberKeypads'
import { useState } from 'react';
import { useEffect } from 'react';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const isPasswordCompleted = password.length === 4;

  useEffect(() => {
    if (isPasswordCompleted) {
        console.log("비밀번호 입력이 완료되었습니다")
    }
  }, [isPasswordCompleted])

  return (
    <>
      <Header
        title={'비밀번호를 입력해주세요'}
        subtitle={
          <span style={{ color: 'red' }}>연속된 숫자는 사용할 수 없어요.</span>
        }
      />
      <PasswordIndicator length={4} value={'123'} />
      <NumberKeypads
        numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        onPress={console.log} // 누른 숫자를 반환
      />
    </>
  );
}

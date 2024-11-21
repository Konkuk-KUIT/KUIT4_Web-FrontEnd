import { useState } from 'react';
import PasswordInput from '../../components/PasswordInput';

const STEP = {
  // 휴먼 에러를 줄이기 위해 enum 선언
  // constant폴더로 넘기지 않는 이유 <- 이 페이지에서만 STEP상수가 사용됨, co-location 원칙
  INIT: 'INIT',
};

export default function PasswordPage() {
  const [step, setStep] = useState({
    name: STEP.INIT,
    payload: {},
    // step의 상태에 따라 페이지를 렌더링하는데, 예를 들어 비밀번호 조건이 안맞아서
    // 비밀번호 재입력 페이지로 넘어갈 때 어떤 원인으로 이 페이지로 넘어왔는지
    // 데이터를 받아서 렌더링시키기 위해 payload 선언
  });

  const handlePasswordComplete = (password) => {
    switch (step.name) {
      case STEP.INIT:
        console.log(password);
    }
  };

  switch (step.name) {
    // 모든 case를 구분 가능할 때(else가 필요없을때)는 if-else보다 switch-case 추천
    case STEP.INIT:
      return (
        <PasswordInput
          title={'비밀번호를 입력해주세요'}
          onComplete={handlePasswordComplete}
        />
      );
    default:
      return null;
  }
}

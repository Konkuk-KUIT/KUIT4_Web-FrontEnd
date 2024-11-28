import { useState } from 'react';
import PasswordInput from '../../components/PasswordInput';
import validatePassword from './utils/validatePassword';
import Header from '../../components/Header';

const STEP = {
  // 휴먼 에러를 줄이기 위해 enum 선언
  // constant폴더로 넘기지 않는 이유 <- 이 페이지에서만 STEP상수가 사용됨, co-location 원칙
  INIT: 'INIT',
  CONFIRM: 'CONFIRM',
  COMPLETE: 'COMPLETE',
  ERROR: 'ERROR'
};

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [step, setStep] = useState({
    name: STEP.INIT,
    payload: {},
    // step의 상태에 따라 페이지를 렌더링하는데, 예를 들어 비밀번호 조건이 안맞아서
    // 비밀번호 재입력 페이지로 넘어갈 때 어떤 원인으로 이 페이지로 넘어왔는지
    // 데이터를 받아서 렌더링시키기 위해 payload 선언
  });

  const handlePasswordComplete = (value) => {
    switch (step.name) {
      case STEP.INIT: 
      case STEP.ERROR: { // INIT일 때와 ERROR일 때의 플로우가 똑같음
        const { isValid, errorMessage } = validatePassword(value);

        if (isValid) {
          setPassword(value)
          setStep({
            name: STEP.CONFIRM
          })
        } else {
          setStep({
            name: STEP.ERROR,
            payload: {
              message: errorMessage
            }
          })
        }
        break;
      }

      case STEP.CONFIRM: {
        const isValid = password === value;
        if (isValid) {
          setStep({
            name: STEP.COMPLETE
          })
        } else {
          setStep({
            name: STEP.ERROR,
            payload: {
              message: '비밀번호가 일치하지 않습니다.'
            }
          })
        }
        break;
      }
    }
    
  };

  switch (step.name) {
    // 모든 case를 구분 가능할 때(else가 필요없을때)는 if-else보다 switch-case 추천
    case STEP.INIT: {
      return (
        <PasswordInput
          key={step.name}
          title={'비밀번호를 입력해주세요'}
          onComplete={handlePasswordComplete}
        />
      );
      break;
    }

    case STEP.CONFIRM: {
      return (
        <PasswordInput
          key={step.name}
          title={'비밀번호를 한 번 더\n입력해주세요'}
          onComplete={handlePasswordComplete}
        />
      )
      break;
    }

    case STEP.ERROR: {
      return (
        <PasswordInput 
          key={`${step.name}-${step.payload.message}`}
          title={'비밀번호를 다시 입력해주세요'}
          subtitle={<span style={{color: 'red'}}>{step.payload.message}</span>}
          onComplete={handlePasswordComplete}
        />
      )
      break;
    }

    default:
      return (
        <>
          <Header title={'비밀번호 입력을 완료했어요!'} subtitle={password} />
        </>
      );
  }
}

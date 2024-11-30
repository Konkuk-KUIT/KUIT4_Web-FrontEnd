import { useState } from 'react';
import PasswordInput from "./PasswordInput";
import validatePassword from '../utils/validatePassword';
import Header from './Header';


const STEP = {
    INIT: 'INIT',
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    COMPLETE: 'COMPLETE',
};
//test
const consoleLog = (value) =>{
    console.log(value);
}

export default function PasswordPage() {
    const [password, setPassword] = useState('');
    const [step, setStep] = useState({
        name: STEP.INIT,
        payload: {},
    });

    const handlePasswordComplete = (value) => {
        switch (step.name) {
            case STEP.INIT:
            case STEP.ERROR: {
                // console.log(password);
                const { isValid, errorMessage } = validatePassword(value);

                if (isValid) {
                    setPassword(value);
                    setStep({
                        name: STEP.CONFIRM,
                    });
                } else {
                    setStep({
                        name: STEP.ERROR,
                        payload: {
                            message: '비밀번호가 너무 쉽습니다.',
                        },
                    });
                }
                break;
            }

            case STEP.CONFIRM: {
                const isValid = password === value;

                if (isValid) {
                    setStep({
                        name: STEP.CONFIRM,
                    });
                } else {
                    setStep({
                        name: STEP.ERROR,
                        payload: {
                            message: '비밀번호가 일치하지 않습니다.',
                        },
                    });
                }
                break;
            }

            default:
                break;
        }
    };

    switch (step.name) {
        case STEP.INIT: {
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 입력해주세요'}
                    onComplete={handlePasswordComplete}
                />
            );
        }

        case STEP.CONFIRM: {
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 한 번 더\n입력해주세요'}
                    onComplete={handlePasswordComplete}
                    secure={true}
                />
            );
        }

        case STEP.ERROR: {
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 다시 입력해주세요'}
                    subtitle={<span style={{ color: 'red' }}>{step.payload.message}</span>}
                    onComplete={handlePasswordComplete}
                />
            );
        }
        case STEP.COMPLETE:
            return <Header title="비밀번호 입력을 완료했어요!" />;

        default:
            return null;
    }
}

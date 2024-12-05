
import Header from '../Header'
import PasswordIndicator from '../PasswordIndicator'
import NumberKeypads from '../NumberKeypads'
import { useEffect,useState,useMemo } from 'react';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';
import shuffle from '../../utils/shuffle'; 

export default function PasswordInput({
    title,
    subtitle, 
    length= DEFAULT_PASSWORD_LENGTH, 
    onComplete,
secured=true,
})
    {

    
    // const keypadNumbers=[1,2,3,4,5,6,7,8,9,0];
    const keypadNumbers= useMemo(()=>shuffle(
        Array.from({length:10}, (_, index) => index)),
    [],
    );

    const[password, setPassword]= useState('');
    const isPasswordCompleted = password.length ==length; //상정한 pw길이랑 사용자 pw길이가 같을때


    const handleKeyPress=(number) =>{
        setPassword((prev)=>prev+number);
    }
    useEffect(()=>{
        if(isPasswordCompleted){
            onComplete(password);
            // console.log('비밀번호 입력이 완료되었습니다.');
            setPassword('');
        }
    } , [isPasswordCompleted]); 
    
    return(<div>
        <Header
            title={title}
            subtitle={
               subtitle
            }
        />
        <PasswordIndicator length={length} value={password} />

        <NumberKeypads
            numbers={keypadNumbers}
            // onPress={console.log}
            onPress={handleKeyPress}
             secure={secured}
            />

    </div>
    );
}
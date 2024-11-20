import Header from "../Header";
import PasswordIndicator from "../PasswordIndicator";
import NumberKeypads from "../NumberKeypads";
import { useState, } from "react";
import { useEffect,useMemo } from "react";
import shuffle from "../../utils/shuffle";
import { DEFAULT_PASSWORD_LENGTH } from "../../constants/password";
export default function PasswordInput({title,subtitle,onComplete,length=DEFAULT_PASSWORD_LENGTH}){
    const [password, setPassword] = useState('');
    const isPasswordCompleted = password.length === length;
    const keypadNumbers = useMemo(() => {
        const numbers = Array.from({ length: 10 }, (_, index) => index);
         shuffle(numbers);
    }, [],); // 
    const handleKeyPress = (number)=>{
        setPassword((prev)=>prev+number);
    }
    useEffect(()=>{
        if (isPasswordCompleted){
            onComplete(password);
            setPassword('');
        }
    },[isPasswordCompleted]);
    return (<>
    <Header title = {title} 
    subtitle={subtitle}/>
    <PasswordIndicator length={4} value={password}/>
    <NumberKeypads numbers={keypadNumbers} onPress={handleKeyPress}/>
    </>);
}
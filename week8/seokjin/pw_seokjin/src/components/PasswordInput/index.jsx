import Header from "../Header"
import PassWordIndicator from "../PasswordIndicator"
import NumberKeypads from "../NumberKeypads"
import { DEFAULT_PASSWORD_LENGTH } from "../../constants/password";

import shuffle from "../../utils/shuffle";

import { useEffect, useState, useMemo } from "react";


export default function PasswordInput({ 
    title, 
    subtitle, 
    onComplete, 
    length = DEFAULT_PASSWORD_LENGTH,
}) {
    const [password, setPassword] = useState('');
    const isPasswordCompleted = password.length === length;

    const handleKeyPress = (number) => {
        setPassword((prev) => prev + number);
    };

    const keyPadNumbers = useMemo(() => shuffle(
        Array.from({ length: 10 }, (_, index) => index),
    ), []) 

    useEffect(() => {
        if(isPasswordCompleted) {
            onComplete(password);
            setPassword('');
        }
    }, [isPasswordCompleted])

    return (
        <>
        <Header title={title} subtitle= {subtitle} />
        <PassWordIndicator length={length} value={password}/>
        <NumberKeypads numbers={keyPadNumbers} 
        onPress={handleKeyPress}
        />
    </>
    );
}